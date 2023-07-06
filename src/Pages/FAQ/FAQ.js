import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import './FAQ.css'
import { FaSearch } from "react-icons/fa";

 const FAQ=() =>
 {
return(
    <>
    <Navbar/>
    <div className="faq-container">
        <h1>FAQ</h1>
        <p> Frequently Asked Questions</p>
        
    </div>
    <Footer />
    </>
)
 }
 export default FAQ;