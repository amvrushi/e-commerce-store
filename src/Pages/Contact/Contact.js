import React from "react";

const Contact=()=>
{
    return(
        <>
        <div>
            <h1>Contact</h1>
            <h4>You're welcome to contact us with any inquiry</h4>
            <p> Tel: 123-456-7890    |    info@mysite.com</p>
            <form>
                <label>FirstName*</label>
                <input type="text" required></input>
                <br></br>
                <label>LastName</label>
                <input type="text" ></input>
                   <br></br>
                <label>Email*</label>
                <input type="email" required></input>
                   <br></br>
<label>Contact No.</label>
                <input type="tel" ></input>
                   <br></br>
                <label>Message*</label>
                <textarea required> </textarea>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
export default Contact;