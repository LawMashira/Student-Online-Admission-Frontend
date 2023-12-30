import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className="w-full mt-20 bg-slate-950 px-10  h-auto py-20 pb-20 rounded-e-3xl flex items-center 
     border-b-[1px] border-b-black flex-col ">
<h className="text-5xl font-semibold">Welcome back</h>
<p className="font-medium text-lg text-gray-500 mt-5">Please enter your credentinos to Login</p>
<div className="mt-8">
                <div className="text-lg font-medium text-center ">
                                <label>Email</label>
                                <input  
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                />
                </div>

                <div className="text-lg font-medium text-center">
                                <label>Password</label>
                                <input  
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                type="password"
                                />
                </div>





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

                </div>

                <div className="mt-8 flex flex-col">
                              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white font-bold text-lg "> Sign In</button>  
                </div>
                                   <div className="mt-8 flex flex-col"> <h1 className='text-center'> OR</h1></div>

                <div className="flex flex-col mt-0" ><Link to="/register/maghandi/college" className="py-3 rounded-xl bg-green-500 text-white font-bold text-lg  mt-12 text-center"> Create Account </Link></div>
</div>


    </div>
  )
}

export default Login