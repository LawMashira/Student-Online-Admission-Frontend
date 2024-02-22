/*import React, { Component, useEffect, useState } from 'react'
import User from '../../models/user';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import AuthenticationService from '../../services/authentication.service';



//import AuthenticationService from '../../services/authentication.service';
 const Register2 =()=>{

  const [user, setUser] = useState(new User('', '', ''));
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const currentUser = useSelector(state => state.user);

  const navigate = useNavigate();

  //mounted
  useEffect(() => {
      if (currentUser?.id) {
          //navigate
          navigate('/profile');
      }
  }, []);

  //<input name="x" value="y" onChange=(event) => handleChange(event)>
  const handleChange = (e) => {
    const {name, value} = e.target;

    setUser((prevState => {
        //e.g: prevState ({user: x, pass: x}) + newKeyValue ({user: xy}) => ({user: xy, pass: x})
        return {
            ...prevState,
            [name]: value
        };
    }));
  };

  const handleRegister = (e) => {

      e.preventDefault();

    setSubmitted(true);

    if (!user.username || !user.password || !user.name) {
        return;
    }

    setLoading(true);

    AuthenticationService.register(user).then(_ => {
        navigate('/sign_up/maghandi/college');
    }).catch(error => {
       console.log(error);
       if (error?.response?.status === 409) {
           setErrorMessage('username or password is not valid.');
       } else {
           setErrorMessage('Unexpected error occurred.');
       }
       setLoading(false);
    });
  };









  return (
    <div  className="w-full mt-20 bg-slate-950 px-10  h-auto py-20 pb-20 rounded-e-3xl flex items-center 
     border-b-[1px] border-b-black flex-col ">
<h className="text-5xl font-semibold">Sign Up</h>
<p className="font-medium text-lg text-gray-500 mt-5">Please enter your credentinos to sign up</p>
<div className="mt-8">

{errorMessage &&
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
                }
<form

onSubmit={(e) => handleRegister(e)}
noValidate
className={submitted ? 'was-validated' : ''}


>

<div className="text-lg font-medium text-center ">

  
  
  
  
                           <label> FullName </label>
                                <input 
                                
                                
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your fullname"
                                name="fullname"   
                                onChange={(e) => handleChange(e)}
                                required
                                />
                              
                </div>
                <div className="text-lg font-medium text-center ">
                                <label>Email</label>
                                <input
                              
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                name="username"   
                                onChange={(e) => handleChange(e)}
                                required
                                />
                                 
                </div>

                <div className="text-lg font-medium text-center">
                                <label>Password</label>
                                <input  
                               
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                                name="password"   
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

  </div>*

                <div className="mt-8 flex flex-col">
                              <button    className="active:scale-[.98] active:duration-75 hover:scale-[1.01] 
                              ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white font-bold 
                              text-lg "  disabled={loading}> Sign Up</button>  
                </div>

                </form> 
                

</div>


    </div>
  );
}


export default  Register2;*/