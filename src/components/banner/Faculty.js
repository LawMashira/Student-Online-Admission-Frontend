import React from "react";
import Title from "./Title";
import FacultyCard from "./FacultyCard";
import { bank, civil, computer, hotel, humanities, teacher } from "./Images";

const Faculty = () => {
  return (
    <div className="w-full py-20 border-b-[px] border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title title="Visit Our Faculties" des="Faculty" />
      </div>

      <div className="grid grid-cols-1 mdl:grid-cols-3 gap-14">
        <FacultyCard
          title="Faculty Of Construction and Civil Enginnering"
          desc="
          The Civil Engineering Division is committed to providing excellent technical and vocational 
          education, training and services that will prepare students to face the challenges of employment,
           entrepreneurship and technical advancement by enhancing individuals with practical skills 
           and growth potential in the Civil Engineering Discipline."
          src={civil}
        />
        <FacultyCard
          title="Facalty Of Information And Technology"
          desc="
          We endeavor together with Industry and the Community to provide quality 
          Technological Higher and Tertiary Education and Training through teaching and learning. 
          The focused approach to development and learning should satisfy the current and future 
          Human Resources needs of the formal and informal employment sectors of Zimbabwe. The division produces detergents 
          for the institution and are working towards expanding to cater for the external community."
          src={computer}
        />
        <FacultyCard
          title="Faculty Of Commerce"
          desc="
          The department aims to Develop Skilled Human Capital and
           Entrepreneurs through the Provision of dynamic quality
            scientific, technical, vocational, education and training for sustainable socio-economic transformation.
          "
          src={bank}
        />
        <FacultyCard
          title="Faculty Of Hotel And Catering"
          desc="The Department of Hospitality and Tourism is 
          committed to provide students with a quality career-focused education to meet the needs of the 
          growing hospitality and tourism sector, and to cater for a new generation of students, with the ultimate goal of producing critically thinking, responsive and intellectually well-grounded individuals,
           who will easily adapt to the demands and challenges of the twenty-first century."
          src={hotel}
        />
        <FacultyCard
          title="Faculty Of Teacher Education"
          desc="
          The department trains individuals in 
          entrepreneurship and National and Strategic studies. Students are offered the opportunity to meet with other students both locally, nationally and regionally through
           educational tours to places like Great Zimbabwe, Masvingo and Chimoio, Mozambique."
          src={teacher}
        />
        <FacultyCard
          title="Faculty Of Humanities and Social Sciences"
          desc="The aim of the Department is to train talented people in the skills required by the design industry. 
          Graduating students find employment in Advertising Studios, Display Studios, Origination Studios, Television, Art Departments, Commercial Printing, Textile and Clothing Industries.
           Some Students generate their own companies providing employment for others."
          src={humanities}
        />
      </div>
    </div>
  );
};

export default Faculty;
