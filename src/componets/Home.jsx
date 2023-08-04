import React from 'react'
import img1 from "../assests/image1.png"
import cirimage from "../assests/hiclipart.com.png"
import patternimg from "../assests/hiclipart.com(3).png"
import{AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
        <div className='heading'>  <h1>TechyStar</h1>
            <p>Solution to all your problem</p></div>
            
      <div className='image'><img src={cirimage} alt="pattern" />
         <img src={patternimg} alt="pattern2" /></div>
        </main>
    </div>
    <div className="home2">
        <div className='imgBox'><img src={img1} alt="computer" /></div>

        <div className='textBox'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus facere fugit laudantium nihil dolorum necessitatibus voluptas quibusdam debitis reiciendis inventore!</p>
        </div>

    </div>
 <div className="home3" id='about'>
  <div>
    <h1>Who we are?</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis et ipsam aliquid excepturi labore molestiae voluptates atque! Non quidem cumque explicabo delectus, enim atque voluptatem harum molestiae, veritatis porro quas.</p>
  </div>
 </div>

 <div className='home4' id='brands'>
<div className='brandBox'>
  <h1>Brands</h1>

  <article>
    <div style={ {
      animationDelay:"0.3s",
    }}>
      <AiFillGoogleCircle/>
      <p>Google</p>
    </div>

    <div style={ {
      animationDelay:"0.5s",
    }}>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
    </div>

    <div style={ {
      animationDelay:"0.4s",
    }}>
      <AiFillYoutube/>
      <p>Youtube</p>
    </div>
    <div style={ {
      animationDelay:"0.1s",
    }}>
      <AiFillInstagram/>
      <p>Instagram</p>
    </div>
  </article>
</div>
 </div>
    </>
  )
}

export default Home