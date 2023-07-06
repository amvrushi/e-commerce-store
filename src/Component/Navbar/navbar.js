import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css";
import { FaSearch , FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import ToteHub from  '../../assets/ToteHub.png';

const Navbar = () =>
{
return(
    <>
<div className="navbar-container">
    <div className="navbar-items">
        
        <Link  style={{marginLeft:'-20px'}} className="link"to="/">
            {/* <img src="{ToteHub}"></img> */}
            <h1 style={{marginTop:'-20px'}}>Tote</h1> 
            <h4>Funky Printed Bags</h4>
        </Link>
        
        <Link className="link" to="/shop">
            Shop
        </Link>
 <AnchorLink className="link" href="#about">
           About
        </AnchorLink>
        
         <Link className="link" to="/faq">
         FAQ
        </Link>
         <Link className="link" to="/contact">
           Contact
        </Link>
        <Link className="link" to="">
            <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
     <FaSearch style={{fontSize:'20px', marginLeft:'10px', }}/>
    </form>
        </Link>
        <Link className="link" to="">
            <FaUserCircle style={{fontSize:'25px'}}/> Log In
        </Link>
         <Link className="link" to="">
            <FaCartArrowDown style={{fontSize:'25px'}}/>
        </Link>
    </div>
</div>
    </>
)
}
export default Navbar;