import React, { Component, useEffect, useState } from 'react'
import User from '../../models/user';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import { getResponseError } from './errorUtils';
import swal from 'sweetalert';
import axios from 'axios';
import { render } from '@testing-library/react';
//import AuthenticationService from '../../services/authentication.service';
 class Register2 extends Component{

state ={
id:"",
username:"",
fullname:"",
password:""


}



//  navigate('/sign_up/maghandi/college');
//const navigate = useNavigate();
handleChange=(e)=>{
  
this.setState({
     [e.target.name]: e.target.value    
});
  
}
 saveUser= async(e)=>{
  e.preventDefault();
 
  const res =await axios.post('http://localhost:8080/api/authentication/sign-up',this.state)


if(res.data.status === 200)
(
this.setState({
                id:"",
                username:"",
                fullname:"",
                password:""           
})
)
 }
 
render() {
  return (
    <div  className="w-full mt-20 bg-slate-950 px-10  h-auto py-20 pb-20 rounded-e-3xl flex items-center 
     border-b-[1px] border-b-black flex-col ">
<h className="text-5xl font-semibold">Sign Up</h>
<p className="font-medium text-lg text-gray-500 mt-5">Please enter your credentinos to sign up</p>
<div className="mt-8">


<div className="text-lg font-medium text-center ">

  
  
  
  
                           <label> FullName </label>
                                <input 
                                
                                
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your fullname"
                                name="fullname"   onChange={this.handleChange} value={this.fullname}
                                required
                                />
                              
                </div>
                <div className="text-lg font-medium text-center ">
                                <label>Email</label>
                                <input
                              
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                name="username"   onChange={this.handleChange} value={this.usename}
                                required
                                />
                                 
                </div>

                <div className="text-lg font-medium text-center">
                                <label>Password</label>
                                <input  
                               
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                                name="password"   onChange={this.handleChange} value={this.password}
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
                              <button onClick={this.saveUser}   className="active:scale-[.98] active:duration-75 hover:scale-[1.01] 
                              ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white font-bold 
                              text-lg "  > Sign Up</button>  
                </div>

              
                

</div>


    </div>
  );
}
}

export default  Register2;