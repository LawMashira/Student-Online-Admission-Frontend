import React, { useEffect, useState } from 'react'
import User from '../../models/user';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import { getResponseError } from './errorUtils';
//import AuthenticationService from '../../services/authentication.service';
const Register = () => {

const [user,setUser]=useState({
id:"",
username:"",
name:"",
password:""


})
// Error handling from springboot endpoints
const [error ,setError] = useState(null);


//******************************************** */
const navigate = useNavigate();
const handleChange=(e)=>{
  const value= e.target.value;
  setUser({...user,[ e.target.name]: value});
}
const saveUser=(e)=>{
  e.preventDefault();
  setError(null);

  const formData = new FormData(e.target)
  const payload =Object.fromEntries(formData);

console.log('payload:',payload)
  //************************************************* */
  userService.saveUser(user).then((response)=>{
  console.log('data:',data);
  navigate('/sign_up/maghandi/college');
   } ).catch((error)=>{
    console.log('error.response',error.response);
     setError(getResponseError(error))
   })
}



  return (
    <div  className="w-full mt-20 bg-slate-950 px-10  h-auto py-20 pb-20 rounded-e-3xl flex items-center 
     border-b-[1px] border-b-black flex-col ">
<h className="text-5xl font-semibold">Sign Up</h>
<p className="font-medium text-lg text-gray-500 mt-5">Please enter your credentinos to sign up</p>
<div className="mt-8">


<div className="text-lg font-medium text-center ">

  
  
  
  
                           <label> FullName </label>
                                <input 
                                name="name" 
                                value={user.name}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your fullname"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                        <FormFieldError message={error?.name}    />   
                </div>
                <div className="text-lg font-medium text-center ">
                                <label>Email</label>
                                <input
                                name="username" 
                                value={user.username} 
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                                 
                </div>

                <div className="text-lg font-medium text-center">
                                <label>Password</label>
                                <input  
                                name="password"
                                value={user.password}
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                                onChange={(e) => handleChange(e)}
                                required
                                />
                               
                </div>




{/*
                <div className="mt-8 flex  justify-between items-center" >
                                <div>
                                                <input
                                                
                                                type="checkbox"
                                                id="remember"
                                                />



                                <label for="remember"
                                  className="ml-2 font-medium text-base "              
                                >Remember me </label>

                                </div>
               

                <div >
                      <a href='###'><button className="font-medium text-base text-violet-500"> Forgot Password</button>  </a>        
                </div>

  </div>*/}

                <div className="mt-8 flex flex-col">
                              <button onClick={saveUser}   className="active:scale-[.98] active:duration-75 hover:scale-[1.01] 
                              ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white font-bold 
                              text-lg "  > Sign Up</button>  
                </div>

              
                

</div>


    </div>
  )
}

export default Register