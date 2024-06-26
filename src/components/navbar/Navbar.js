import React from "react"
import { schoolLog } from "../banner/Images"
import { NavItems } from "../NavItems"
import { useLocation } from "react-router-dom";

// All the routes you want to exclude
const withouSidebarRoutes = ["/application/maghandi/college"];
   
 export const Navbar=() =>{

  const {pathname} = useLocation();

  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  
          return(
<div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center
 border-b-[1px] border-b-slate-600">
                <div  className=" border border-yellow-500 rounded-lg overflow-hidden" >           
            
            <img src={schoolLog} alt="logo"/>
                </div>
                
                <div class="flex flex-auto">
          <h1 className="text-5xl font-signature ml-2">LawMashira</h1>      
       </div>   
          


                <div>
  <ul className =" mdl:inline-flex  items-center gap-6 lg:gap-10">
{
                
  NavItems.map((navlink,id)=>(
<li key={id} className=" text-xl font-normal text-white tracking-wide cursor-pointer
hover:text-red-700 duration-300"  > 


{navlink.title}


</li> 

  )
 )}

  </ul>

 </div>
</div> )
}
export default Navbar