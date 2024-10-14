import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Product from "../components/product";
import Addproduct from "../components/addproduct";
import Testimonial from "../components/testimonial";

function Service() {


  return (
    <>
      <div>
        <Navbar/>
        <Product/>
        <Addproduct/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  )
}

export default Service;
