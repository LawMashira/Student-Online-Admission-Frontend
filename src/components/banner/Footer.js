import React from 'react'
import { schoolLog } from './Images'

export const Footer = () => {
  return (
    <div className="w-full h-96 py-20 items-center  border-b-[1px] border-b-black  grid grid-cols-4 gap-8" >

< div className="w-full  h-full flex flex-col">  
<div  className="  border-yellow-500 rounded-lg overflow-hidden" >           
            
            <img src={schoolLog}  className ="object-scale-down h-20" alt="logo"/>
                </div>
                
          <div className=" ">
            <h3 className=" text-xl uppercase text-red-600 tracking-wider"> Contact Details</h3>

         <p className="font-medium">

         Maghandi Institute of Technology
Cnr 12th Ave/Park Rd
P.O BOX 1392
Bulawayo, Zw
Tel: +263 (292) 233181, 233183, 234188
                          234187, 233709, 238674
Fax:+263 (292) 251165
         </p>
            
          </div>



 </div>
<div className="w-full ">

  <h3 className="text-xl uppercase text-red-600 tracking-wider">Quick Links</h3>
  <ul className=" flex flex-col gap-4 font-medium   py-6  overflow-hidden">
    <a href='/about/maghandi/college'>


    <li>   <span className="w-full text-lg  hover:text-red-500 duration-300 cursor-pointer relative group ">About
    

    </span></li>
    </a>

    <a href='/sign_up/maghandi/college'>

      

    <li>   <span className="w-full text-lg  hover:text-red-500 duration-300 cursor-pointer relative group ">
      Apply For Admission
    

    </span></li>
    </a>


    <a href='/admin/maghandi/college'>

      
    <li>   <span className="w-full text-lg  hover:text-red-500 duration-300 cursor-pointer relative group ">
      Admin
    

    </span></li>
    </a>
  
  <a href='/contact/maghandi/college'>
  <li>   <span className="w-full text-lg  hover:text-red-500 duration-300 cursor-pointer relative group ">
      Send Us An Enquiry
    

    </span></li>
  </a>
  </ul>
</div>
<div className="w-full">

  
<h3 className="text-xl uppercase text-red-600 tracking-wider">faculties </h3>
<ul className="flex flex-col gap-4 font-medium   py-6">
  <li> Faculty  Of Construction and Civli Enginnering </li>
  <li> Faculty Of Commerce </li>
  <li> Faculty Of Teacher Education </li>
  <li> Faculty Of Hotel And Catering </li>
  <li> Faculty Of Information And Technology </li>


</ul>

</div>
<div className="w-full ">
  
<h3 className="text-xl uppercase text-red-600 tracking-wider">Make Payments</h3>

<div className="font-medium">

<p>
Name: Maghandi Institute of Technology
</p>
<p className="">
Bank: CBZ Sapphire Branch
Account Number: 02420583120037
Swift Code: COBZZWHA
Branch Sort Code: 6120
</p>
<p>
Bank : Stanbic
Branch: Southerton
Account Number: 9140003266809
Swift Code: SBICZWHX
</p>
<p>
finance-inquiries@hit.ac.zw
</p>
</div>
</div>


    </div>
  )
}
export default Footer