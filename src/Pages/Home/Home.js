import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Shop from "../Shop/Shop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Shop />

            </div>
            <div>
                <About />
            </div>

            <div>
                <Footer />
            </div>


        </>
    );
}
export default Home;
