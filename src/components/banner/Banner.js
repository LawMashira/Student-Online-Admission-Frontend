
import React from 'react'
//import { schoolPicture } from '../../Images'

import 'react-alice-carousel/lib/alice-carousel.css';
import Main from './Main';
import Faculty from './Faculty';

//import Footer from './Footer';
import { useTypewriter } from 'react-simple-typewriter';
import BannerSocialMedia from './BannerSocialMedia';
//import FacultyCard from './FacultyCard';
//import MissionCard from './MissionCard';

const Banner=()=> {
                const [text]=useTypewriter({
                                words:["Welcome to a place where dreams take flight and knowledge knows no bounds. Embrace the journey",
                                "Here, we don’t just open doors; we open minds. Welcome to a world of endless possibilities, brave students",
                                 "Welcome to a place where dreams take flight and knowledge knows no bounds. Embrace the journey, dear students."
                                 ],
                                loop:true,
                                typeSpeed:1,
                                delaySpeed:4000,
                                deleteSpeed:1,  
                              });
                              

 

  return (
               



    
                <div  className="w-full  bg-black h-auto pb-20 flex items-center  border-b-[1px] border-b-black flex-col " >

   
<div className="absolute top-0 left-96 right-96 flex justify-center items-center mt-24">
                <h1 className="text-3xl text-purple-700">
                THE PEOPLE'S COLLEGE
                </h1>
                </div>
                <div className="absolute top-0   left-96 right-96 flex justify-center items-center mt-36">
                <p className=" text-xl text-green-500" >Learn Here And Be a Leader Everywhere You Go ! ! !</p></div>


<Main/> 


<div className="absolute bottom-0 left-96 right-96 flex justify-center items-center  ">

</div>

<div className="absolute bottom-0 left-96 right-96 flex justify-center items-center   flex-col gap-5">
                <h1 className="text-3xl text-red-700 ">
                ENROLLMENT IN PROGRESS APPLY TODAY
                </h1>
                <h2 className="text-3xl font-bold text-white">
     <span className="text-yellow-500 text"> {text} </span> </h2>
                
               


                
                </div>

                <div className="absolute bottom-0 left-96 right-96 flex  justify-center items-center h-36 ">
<h2 className="   mt-60 text-3xl ">Our Mission</h2>
 


      </div>
     
      
      <div className="  w-full py-20 border-b-[1px] border-b-black mt-96 grid grid-cols-3 gap-8"> 
      
      <div className="w-full h-full text-xl">
        <ul className=" "> 
        <li>
        *   Accelerating our progress as an international leader in sciences, engineering, social sciences, health
science, business, and music.
        </li>
        <li>
          * Empowering our students to fulfill their academic and professional passions in a University that is diverse,
welcoming, and inclusive for all students, faculty, and staff.
        </li>
        <li>
      *  Creating innovative connections among education, humanities, music, the social sciences, science,
engineering, and health science
        </li>
        </ul></div>
         <div className="w-full h-full text-xl">
         
         <ul> 
        <li>
        *   Accelerating our progress as an international leader in sciences, engineering, social sciences, health
science, business, and music.
        </li>
        <li>
          * Empowering our students to fulfill their academic and professional passions in a University that is diverse,
welcoming, and inclusive for all students, faculty, and staff.
        </li>
        <li>
      *  Creating innovative connections among education, humanities, music, the social sciences, science,
engineering, and health science
        </li>
        </ul>
         </div> 
         <div className="w-full h-full text-xl">
         <ul> 
        <li>
        *   Accelerating our progress as an international leader in sciences, engineering, social sciences, health
science, business, and music.
        </li>
        <li>
          * Empowering our students to fulfill their academic and professional passions in a University that is diverse,
welcoming, and inclusive for all students, faculty, and staff.
        </li>
        <li>
      *  Creating innovative connections among education, humanities, music, the social sciences, science,
engineering, and health science
        </li>
        </ul>
          
          </div> 
      
      </div>

      <div className=" ">
      <Faculty/>
      </div>

     
                </div>
  )
}
export default Banner
