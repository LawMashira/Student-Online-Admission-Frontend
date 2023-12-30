import React from "react"
import { schoolLog } from "../banner/Images"
import { NavItems } from "../NavItems"
import { Link } from "react-router-dom"


   
 export const Navbar2=() =>{


  
          return(
<div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center
 border-b-[1px] border-b-slate-600">
                <div  className=" border border-yellow-500 rounded-lg overflow-hidden" >           
            
            <img src={schoolLog}  className ="object-scale-down h-20" alt="logo"/>
                </div>
                
                <div class="flex flex-auto">
          <h1 className="text-3xl font-signature ml-2">Maghandi Institute of Technology</h1>      
       </div>   
          

          





                <div>
  <ul className=" flex  items-center gap-6 lg:gap-10">
{
                
  NavItems.map((navlink)=>(
<li  className=" text-xl font-normal text-white tracking-wide cursor-pointer
hover:text-red-700 duration-300"  > 



<Link to={navlink.url}>
{navlink.title}
</Link>

</li> 

  )
 )}

  </ul>

 </div>


 

</div> )
}
export default Navbar2