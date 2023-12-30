import React from 'react'
import Title from './Title'
import FacultyCard from "./FacultyCard"
import { bank, civil, computer, hotel, humanities, teacher } from './Images'

const Faculty = () => {
  return (
    <div className="w-full py-20 border-b-[px] border-b-black ">
              
              <div className="flex justify-center items-center text-center">
              <Title
                title="Visit Our Faculties"
                des="Faculty"

                />

              </div>

              <div  className="grid grid-cols-3 gap-14">
                <FacultyCard
                title="Faculty Of Construction and Civil Enginnering"
                desc="riotriotrorgpogpogpotgopo"
                src={civil}
                />
                <FacultyCard
                title="Facalty Of Information And Technology"
                desc="iorjrjrggkgrk"
                src={computer}
                />
                <FacultyCard
                title="Faculty Of Commerce"
                desc="jiweriorrrgjkrgjkgjkg"
                src={bank}
                />
                <FacultyCard
                title="Faculty Of Hotel And Catering"
                desc="kerrtjnrbpothpk[yummm
                                lyllpjl"
                src={hotel}
                />
                <FacultyCard
                title="Faculty Of Teacher Education"
                desc="iorgiogjiogjihjihpiohhho6795y80ti9[-]o=\p
iootyiouoyujp-yujp][-o=klj0oyupyotyty9klthiotykltypotypotyytoph;lpoy
ylyoyypoyypoylypoyupyu;yu'[yuyu
uyupyupopry0-lyuplylyu[yu[;
j;j;l;lj;lj;'j;lj'
j\p[yupyu;u\-o=;lwp[]]]]]]]"
                src={teacher}
                />
                <FacultyCard
                title="Faculty Of Humanities and Social Sciences"
                desc="jgkfgkgklghklggklgnklyyjpoyj"
                src={humanities}
                />
             
             
              </div>
    </div>
  )
}

export default Faculty