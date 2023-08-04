import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assests/scrollimage.jpg"
import image2 from "../assests/scrollimg.webp"
const Services = () => {
  return (
    <div style={{backgroundColor:"rgb(36, 19, 53)"}}>
     
     <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={1500} >
        <div>
        <img src={image1} style={{height:"70vh" ,width:"90%"}} alt="services-image1" />
        <p className='legend'>Full Stack</p>
        </div>
        <div>
        <img src={image2} style={{height:"70vh", width:"90%",}} alt="services-image2" />
        <p className='legend'>Peer-to-Peer Support</p>
        </div>
     </Carousel>
    </div>
  )
}

export default Services