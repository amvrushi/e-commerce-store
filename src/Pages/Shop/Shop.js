import React from "react";
import Navbar from "../../Component/Navbar/navbar";
import Home from "../Home/Home";
import './Shop.css'

import pr1 from '../../assets/pr1.jpg';
import pr2 from '../../assets/pr2.jpg';
import pr3 from '../../assets/pr3.jpg';
import pr4 from '../../assets/pr4.jpg';
import pr5 from '../../assets/pr5.jpg';
import pr6 from '../../assets/pr6.jpg';
import pr7 from '../../assets/pr7.jpg';
import pr8 from '../../assets/pr8.jpg';
import pr9 from '../../assets/pr9.jpg';

const Shop = () =>
{
    return(
        <>
        {/* <div className="images">
            <img style={{marginTop: "90px"}} src={pr1}></img>
            <img src={pr2}></img>
            <img src={pr3}></img>
            <img src={pr4}></img>
            <img src={pr5}></img>
            <img src={pr6}></img>
            <img src={pr7}></img>
            <img src={pr8}></img>
            <img src={pr9}></img>
        </div> */}

        <div className="products">
            <div className="first">
                       <img style={{marginTop: "170px"}} src={pr1}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
      <div className="second">
                       <img style={{marginTop: "170px"}} src={pr2}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
      <div className="third">
                       <img style={{marginTop: "170px"}} src={pr3}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
      <div className="fourth">
                       <img  src={pr4}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
                  <div className="fifth">
                       <img  src={pr5}></img>
                       <h4>I'm a product</h4>
                       <h4>$14.25</h4>
            </div>
            <div className="sixth">
                       <img  src={pr6}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
                     </div>
   <div className="seventh">
                       <img  src={pr7}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
   <div className="eighth">
                       <img  src={pr8}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
   <div className="ninth">
                       <img  src={pr9}></img>
                       <h4>I'm a product</h4>
                       <h4>$15.00</h4>
            </div>
        </div>
        </>
    ) 
    
}
export default Shop;