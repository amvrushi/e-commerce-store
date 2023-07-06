import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Contact.css'
const Contact=()=>
{
    return(
        <>
        
        <div  >
            <Navbar />
            <div class="topic"> 
            <h1>Contact</h1>
            <p style={{textAlign:'center'}}>You're welcome to contact us with any inquiry</p>
            <p style={{textAlign:'center', marginTop:'-100px', fontSize:'20px'}}> Tel: 123-456-7890    |    info@mysite.com</p>
            </div>
            <form>
                <label className="label">FirstName*</label>
                <br></br>
                <input  className="contact" type="text" required></input>
                <br></br>
                <label className="label">LastName</label>
                <br></br>
                <input  className="contact" type="text" ></input>
                   <br></br>
                <label className="label">Email*</label>
                <br></br>
                <input  className="contact" type="email" required></input>
                   <br></br>
                <label className="label">Contact No.</label>
                <br></br>
                <input  className="contact" type="tel" ></input>
                   <br></br>
                <label className="label">Message*</label>
                <br></br>
                <textarea style={{marginBottom:'130px'}} className="contact" required> </textarea>
                <br></br>
                <button style={{marginTop:'-115px'}} className="button">Submit</button>
            </form>

            
        </div>
   <Footer className="foot" />
        </>
    )
}
export default Contact;