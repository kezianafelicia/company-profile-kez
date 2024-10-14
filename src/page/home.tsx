import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Overview from "../components/overview";
import Footer from "../components/footer";
import Product from "../components/product";
import Testimonial from "../components/testimonial";
import Teams from "../components/teams";

function Home() {


  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Overview/>
        <Product/>
        <Testimonial/>
        <Teams/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;
