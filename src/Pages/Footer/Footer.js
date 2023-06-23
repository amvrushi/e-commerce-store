import React from "react";
import './Footer.css'

const Footer=() =>
{
    return(
        <>
        <div className="ftr">
            <ul className="lists">
                <li style={{marginTop:"40px"}}>Shipping & Returns</li>
                <li style={{marginTop:"40px"}}>Contact</li>
                <li style={{marginTop:"40px"}}>Facebook</li>        
            </ul>
                <ul className="lists">
                <li>Store Policy</li>
                <li>Tel: 123-456-7890</li>
                <li>Instagram</li>        
            </ul>
             
                <ul className="lists">
                <li>Payment Methods</li>
                <li>info@mysite.com</li>
                <li>Pinterest</li>        
            </ul>
            <p style={{paddingBottom:'0px'}}> Join mailing list and never miss an update</p>
        <form>
            <label> Email*</label>
            <br></br>
            <input type="text"></input>
            <button>Subscribe Now</button>
        </form>
        </div>
        </>
    )
}

export default Footer;
