// import React from 'react'

import Brand from "../../Brand";
import Header from "../../Header";
import Navbar from "../../Navbar";
import SeviceBlock from "../../SeviceBlock";
import CtaBlock from "../../CtaBlock";
import CaseStudy from "../../CaseStudy";
import ProcessBlock from "../../ProcessBlock";
import Team from "../../Team";
import ContactUs from "../../Contactus";
import Footer from "../../Footer";


function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Brand/>
        <SeviceBlock/>
        <CtaBlock/>
        <CaseStudy/>
        <ProcessBlock/>
        <Team/>
        <ContactUs/>
        <Footer/>
        

    </div>
  )
}

export default Home
