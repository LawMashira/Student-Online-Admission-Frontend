import React from 'react'

export default function Title({title,des}) {
  return (
                <div className="flex flex-col gap-4  mb-14">
                <h3 className="text-sm uppercase font-light text-red-600 tracking-wide">
                                {title}</h3>
               <h1 className="text-4xl md:text-5ml text-white font-bold capitalize">{des} </h1>
              
                </div>
  )
}
