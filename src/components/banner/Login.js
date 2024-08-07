import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../services/userService';
import axios from 'axios';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  //const [successMessage, setSuccessMessage] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const [user,setUser]=useState({
id:"",
username:"",
//name:"",
password:""


})




//******************************************** */
const navigate = useNavigate();


 /*/mounted
 useEffect(() => {
  if (user?.id) {
      //navigate
     // navigate('/profile');
     navigate('/application/maghandi/college');
  }
}, []);*/

const handleChange=(e)=>{
  const value= e.target.value;
setUser({...user,[ e.target.name]: value});
}
const login= async(e)=>{
  e.preventDefault();
  //http://localhost:8080/api/authentication/sign-in
  ///api/users/signin
       try {
            await axios.post('http://localhost:8080/api/authentication/sign-in', { username, password });
            alert('Login successful');
            navigate('/general-instructions/maghandi/college')
        } catch (error) {
            alert('Invalid credentials');
        }
}





  return (
    <div  className='w-full mt-20 bg-[url("https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] 
    px-10  h-auto py-20 pb-20 rounded-e-3xl flex items-center 
     border-b-[1px] border-b-black flex-col    '>
<h className="text-5xl font-semibold text-black">Welcome back</h>

<div className="mt-8">


{errorMessage &&
          
          <div className="alert alert-danger">
                     {errorMessage}
                 </div>
                 }
                 
<form
                    onSubmit={(e) => login(e)}
                    noValidate
                    className={submitted ? 'was-validated' : ''}
                >
 

                <div className="text-lg font-medium text-left mt-10 text-black">
                                <label>Email</label>
                                <input  
                                  name="username" 
                                  value={user.username}

                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                type="text"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                                   <div className="invalid-feedback">
                            Email is required.
                        </div>
                </div>

                <div className="text-lg font-medium text-left mt-10 text-black">
                                <label >Password</label>
                                <input  
                                  name="password"
                                  value={user.password}

                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                                   <div className="invalid-feedback">
                            Password is required.
                        </div>
                </div>





                <div className="mt-8 flex  justify-between items-center text-black" >
                                <div>
                                                <input
                                                
                                                type="checkbox"
                                                id="remember"
                                                />



                                <label for="remember"
                                  className="ml-2 font-medium text-base text-black "              
                                >Remember me </label>

                                </div>
               

                <div >
                      <a href='###'><button className="font-medium text-base  text-black"> Forgot Password</button>  </a>        
                </div>

                </div>

                <div className="mt-8 flex flex-col">
                              <button  onClick={login}  className="active:scale-[.98] 
                              active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 
                               rounded-xl bg-violet-500 text-white font-bold text-lg " disabled={loading} > 
                               Sign In</button>  
                </div>
                                   <div className="mt-8 flex flex-col"> <h1 className='text-center'> OR</h1></div>

                <div className="flex flex-col mt-0" ><Link to="/register/maghandi/college" className="py-3 rounded-xl bg-green-500 text-white font-bold text-lg  mt-12 text-center"> Create Account </Link></div>



                </form>
</div>


    </div>
  )
}

export default Login