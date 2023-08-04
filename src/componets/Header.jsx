import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import image from'../assests/logoimg1.png'
import { FaBars, FaTimes} from 'react-icons/fa';
class Header extends Component{
  state={clicked:false};
  handleClick =()=>{
    this.setState({
      clicked:!this.state.clicked
    })
  }
  render(){
  return (
    <nav>
      <img src={image} alt="" />
        <h1>Techy Star</h1>
        <main className= {this.state.clicked?"headlink active":"headlink"}>
           <HashLink to={"/#home"}>Home</HashLink>
           <HashLink to={"/#about"}>About</HashLink>
           <Link to={"/contact"}>Contact</Link>
           <HashLink to={"/#brands"}>Brands</HashLink>
           <Link to={"/services"}>services</Link>
      
      </main>
      <div onClick={this.handleClick}>{this.state.clicked?<FaTimes id='cross'/>:<FaBars id='bar'/>}</div>
    </nav>
  )
}
}
export default Header