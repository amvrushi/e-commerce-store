import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Home from "../Home/Home";
import './Shop.css'

import Footer from "../Footer/Footer";

import pr1 from '../../assets/pr1.jpg';
import pr2 from '../../assets/pr2.jpg';
import pr3 from '../../assets/pr3.jpg';
import pr4 from '../../assets/pr4.jpg';
import pr5 from '../../assets/pr5.jpg';
import pr6 from '../../assets/pr6.jpg';
import pr7 from '../../assets/pr7.jpg';
import pr8 from '../../assets/pr8.jpg';
import pr9 from '../../assets/pr9.jpg';
import h1 from '../../assets/h1.jpg';
import h2 from '../../assets/h2.jpg';
import h3 from '../../assets/h3.jpg';
import h4 from '../../assets/h4.jpg';
import h5 from '../../assets/h5.jpg';
import h6 from '../../assets/h6.jpg';
import h7 from '../../assets/h7.jpg';
import h8 from '../../assets/h8.jpg';
import h9 from '../../assets/h9.jpg';

const Shop = () => {
    return (
        <>

            <Navbar />
            <div className="products">
                <div className="first">
                    <img className="image" style={{ marginTop: "170px" }} src={pr1}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="second">
                    <img className="image" style={{ marginTop: "170px" }} src={pr2}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="third">
                    <img className="image" style={{ marginTop: "170px" }} src={pr3}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="fourth">
                    <img className="image" src={pr4}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="fifth">
                    <img className="image" src={pr5}></img>
                    <h4>I'm a product</h4>
                    <h4>$14.25</h4>
                </div>
                <div className="sixth">
                    <img className="image" src={pr6}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="seventh">
                    <img className="image" src={pr7}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="eighth">
                    <img className="image" src={pr8}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
                <div className="ninth">
                    <img className="image" src={pr9}></img>
                    <h4>I'm a product</h4>
                    <h4>$15.00</h4>
                    <input type="button" name="" value="Add to cart" className="add"></input>
                </div>
            </div>

        </>
    )

}
export default Shop;