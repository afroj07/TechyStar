import React from 'react'
import {AiFillInstagram, AiFillGithub, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div className='linkBox'>
            <a href="https://www.youtube.com/channel/UClkkHEWxSzSi5HIoO9hFt8w" target={"blank"}><AiFillInstagram/><p>Instagram</p></a>
            <a href="https://www.youtube.com/channel/UClkkHEWxSzSi5HIoO9hFt8w" target={"blank"}><AiFillGithub/><p>Github</p></a>
            <a href="https://www.youtube.com/channel/UClkkHEWxSzSi5HIoO9hFt8w" target={"blank"}><AiFillYoutube/><p>YouTube</p></a>
            <a href="https://www.youtube.com/channel/UClkkHEWxSzSi5HIoO9hFt8w" target={"blank"}><AiFillLinkedin/><p>LinkedIn</p></a>
        </div>
    </div>
   </footer>
  )
}

export default Footer