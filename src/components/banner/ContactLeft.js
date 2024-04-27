import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { civil } from "./Images";

export default function ContactLeft() {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
p-4 lgl:p-8 
    rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={civil}
        alt="thre supposed to be pic"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold  text-red-600"> Maghandi College</h3>

        <p className="text-xl  flex items-center gap-2 text-yellow-500">
          Tel:
          <span className="text-lightText">
            {" "}
            +263 (292) 233181, 233183, 234188, 234187
          </span>
        </p>
        <p className="text-xl flex items-center gap-2 text-yellow-500">
          Fax:<span className="text-lightText"> +263 (292) 251165</span>
        </p>

        <p className="text-xl  flex items-center gap-2 text-yellow-500">
          Email:<span className="text-lightText">maghandi@institute.ac.zw</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl uppercase mb-4  text-blue-500 text-center">
          FOllOW US ON
        </h2>

        <div className="flex gap-4">
          <a href="https://www.facebook.com/law.mashira">
            <span className="icon">
              <FaFacebook />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/lawson-matutu-520a07216/">
            <span className="icon">
              <FaLinkedinIn />
            </span>
          </a>

          <a href="http://www.github.com/LawMashira">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>

          <a href="http://www.github.com/LawMashira">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
