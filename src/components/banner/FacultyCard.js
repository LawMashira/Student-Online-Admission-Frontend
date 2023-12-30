import React from 'react'

export const FacultyCard = ({title,desc,src}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-[#212428] to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000">

        <div className="w-full h-[80%] overflow-hidden rounded-lg">
        
         <img  className =" w-full h-60 object-cover group-hover:scale-110
         duration-300 cursor-pointer"src ={src} alt='title'/>
        </div>

        <div className='w-full mt-5'>
                <div>
           <h3 className='uppercase text-red-600 text-2xl'>{title}</h3>
                </div>
                <div className='mt-10'>
 {desc}
                </div>
        </div>

    </div>
  )
}
export default FacultyCard  