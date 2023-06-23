import React from "react";
import {Link} from "react-router-dom"
import "./navbar.css";
import { FaSearch , FaUserCircle, FaCartArrowDown } from "react-icons/fa";

const Navbar = () =>
{
return(
    <>
<div className="navbar-container">
    <div className="navbar-items">
        <div style={{marginTop:'50px'}}>
        <Link  to="/">
            <h1>Tote</h1> 
            <h4>Funky Printed Bags</h4>
        </Link>
        </div>
        <Link className="link" to="">
            Shop
        </Link>
 <Link className="link" to="">
           About
        </Link>
         <Link className="link" to="">
         FAQ
        </Link>
         <Link className="link" to="">
           Contact
        </Link>
        <Link className="link" to="">
            <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
     <FaSearch style={{fontsize: "60px"}}/>
    </form>
        </Link>
        <Link className="link" to="">
            <FaUserCircle/> Log In
        </Link>
         <Link className="link" to="">
            <FaCartArrowDown/>
        </Link>
    </div>
</div>
    </>
)
}
export default Navbar;