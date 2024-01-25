import React from 'react'
import { Carousel } from './Carousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const Main=()=>{


const items =Carousel.map((item)=>< img className='cursor-pointer -z-10 mt-28 w-full h-96 rounded-lg' 
                 role ='presentation'  src={item.image} alt="" />)

  return (
  
                <AliceCarousel
                items={items}
               disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
             
            />
  )
}
export default Main