import React from "react";
//import { schoolPicture } from '../../Images'

import "react-alice-carousel/lib/alice-carousel.css";
import Main from "./Main";
import Faculty from "./Faculty";

//import Footer from './Footer';
import { useTypewriter } from "react-simple-typewriter";
//import BannerSocialMedia from './BannerSocialMedia';
//import FacultyCard from './FacultyCard';
//import MissionCard from './MissionCard';

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "A place where dreams take flight and knowledge knows no bounds",
      "Embrace the journey",
      "Here, we don’t just open doors;We open minds",
    ],
    loop: true,
    typeSpeed: 1,
    delaySpeed: 4000,
    deleteSpeed: 1,
  });

  return (
    <div className="w-full  bg-black h-auto pb-20 flex items-center  border-b-[1px] border-b-black flex-col ">
      <div className=" absolute top-0 left-52 mdl:left-96 right-96 flex justify-center items-center text-sm mt-32">
        <h1 className=" text-purple-700">THE PEOPLE'S COLLEGE</h1>
      </div>
      <div className="hidden first:absolute top-0  left-52 mdl:left-96 right-96  mdl:flex justify-center items-center text-xs mt-36">
        <p className=" text-xl text-green-500">
          Learn Here And Be a Leader Everywhere You Go ! ! !
        </p>
      </div>

      <Main />

      <div className="absolute bottom-0 left-52 mdl:left-96  right-96 flex justify-center items-center   flex-col gap-5">
        <h1 className="  text-base font-medium mdl:text-2xl text-red-700 mb-96">
          ENROLLMENT IN PROGRESS APPLY TODAY
        </h1>
        <h2 className="mdl:text-3xl font-bold ">
          <span className="text-violet-500"> {text} </span>{" "}
        </h2>
      </div>

      <div className="absolute bottom-0 left-52 mdl:left-96 right-96 flex  justify-center items-center h-36">
        <h2 className="     text-2xl right-36 mt-96 ">Our Mission </h2>
      </div>

      <div className="w-full py-20 border-b-[1px] border-b-black mt-28 grid grid-cols-1 mdl:grid-cols-3 gap-8 cursor-pointer">
        <div className="w-full h-full text-xl">
          <ul className=" ">
            <li>
              * Accelerating our progress as an international leader in
              sciences, engineering, social sciences, health science, business,
              and music.
            </li>
            <li>
              * Empowering our students to fulfill their academic and
              professional passions in a University that is diverse, welcoming,
              and inclusive for all students, faculty, and staff.
            </li>
            <li>
              * Creating innovative connections among education, humanities,
              music, the social sciences, science, engineering, and health
              science
            </li>
          </ul>
        </div>
        <div className="w-full h-full text-xl">
          <ul>
            <li>
              * Accelerating our progress as an international leader in
              sciences, engineering, social sciences, health science, business,
              and music.
            </li>
            <li>
              * Empowering our students to fulfill their academic and
              professional passions in a University that is diverse, welcoming,
              and inclusive for all students, faculty, and staff.
            </li>
            <li>
              * Creating innovative connections among education, humanities,
              music, the social sciences, science, engineering, and health
              science
            </li>
          </ul>
        </div>
        <div className="w-full h-full text-xl">
          <ul>
            <li>
              * Accelerating our progress as an international leader in
              sciences, engineering, social sciences, health science, business,
              and music.
            </li>
            <li>
              * Empowering our students to fulfill their academic and
              professional passions in a University that is diverse, welcoming,
              and inclusive for all students, faculty, and staff.
            </li>
            <li>
              * Creating innovative connections among education, humanities,
              music, the social sciences, science, engineering, and health
              science
            </li>
          </ul>
        </div>
      </div>

      <div className=" ">
        <Faculty />
      </div>
    </div>
  );
};
export default Banner;
