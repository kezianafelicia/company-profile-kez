import React from "react";
import Navbar from "../components/navbar";
import History from "../components/history";
import Overview from "../components/overview";
import Footer from "../components/footer";
import Culture from "../components/culture";
import Teams from "../components/teams";

function About() {


  return (
    <>
      <div>
        <Navbar/>
        <Overview/>
        <History/>
        <Teams/>
        <Culture/>
        <Footer/>
      </div>
    </>
  )
}

export default About;
