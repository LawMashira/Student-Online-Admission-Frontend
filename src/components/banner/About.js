import React from 'react'
import { principal} from './Images'
export const About = () => {
  return (
    <div className='w-full h-[800px] pb-20  items-center  border-b-[1px] border-b-black
  bg-[url("https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] 
' >
  <h1 className="text-center  text-5xl mb-10 text-blue-900"> Our History</h1>
  <div className=" text-lg text-violet-950 h-96 flex">
    <div>
    
 <p className='p-10'> Bulawayo Polytechnic is an academic institution established in 1927 in Bulawayo, 
  Zimbabwe; initially as a technical school. The current main campus on Park Road in Suburbs was built in 1942. Bulawayo Polytechnic has grown phenomenally, both in terms of student and staff population as well as in the range of disciplines on offer. It is the Second largest polytechnic in Zimbabwe. Student enrolment currently stands at four thousand (4000) which is underpinned by a staff compliment of four hundred (400). 
  Since its establishment, the Polytechnic has produced over one (1) million graduates 
          
          </p>
          </div>
          <div className='mt-20 text-black px-10'>
            <p>Driven by values of Ubuntu/Unhu and Excellence, the Polytechnic prides 
              itself in being the provider of highly empowered human capital through excellent Scientific, Technical and Vocational Education Training for sustainable socio-economic development. The institution’s hostel accommodation can house five hundred (500) students. Teaching and learning activities take place in well-equipped lecture rooms, workshops and laboratories. In line with the Ministry’s’ industrialisation thrust the institution is working on establishing a pharmaceutical factory in Bulawayo and a carpentry factory in Lupane.
The institution falls under the Ministry of Higher and Tertiary Education, Science and Technical Development. Bulawayo Polytechnic offers a wide range of HEXCO, Short Courses and City & Guilds Courses
</p>
          </div>
          </div>
          <h1 className="text-center text-3xl  text-violet-900"> Core Values</h1>
          <ol className="text-center text-xl text-yellow-500 text-bold">
            <li> • Integrity • Professionalism • Innovation • Productivity
• Excellency • Entrepreneurship</li>
            
          </ol>
     
     
     <div className="grid grid-cols-2  ">
      <div  className="">
        <img
        className="w-ful h-56 p-3 bg-slate-800 absolute  bottom-0 left-80 mt-7 "
        src={principal} alt=''
        />
      </div>
      <div>
      <h1 className="text-left text-5xl text-black ">The Principal's Note</h1>
      <p className="text-center text-yellow-500 text-xl mb-36 "> "
      Maghandi College  is committed towards the provision of qualitative rather 
than quantitative Technological Education and Training in order to satisfy the current and 
future human needs of the formal and informal sector in Zimbabwe and the region.
Bulawayo Polytechnic strives to reach out to commerce and industry through its Science, Technology, Engineering and Mathematics (STEM) thrust in order to tackle major national challenges and use TVET as a vehicle for modifying current 
technological trends and inventing the future through research and innovation."</p>
     </div>
    </div>
    </div>
  )
}
export default About