import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Header from '../../header/Header'
import Brand from '../../brand/Brand'
import ServiceBlock from '../../serviceBlock/SeviceBlock'
import CtaBlock from '../../ctaBlock/CtaBlock'
import CaseStudy from '../../caseStudy/CaseStudy'
import ProcessBlock from '../../processBlock/ProcessBlock'
import Team from '../../team/Team'
import ContactUs from '../../contactus/ContactUs'
import Footer from '../../footer/Footer'



function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
        <ServiceBlock></ServiceBlock>
        <CtaBlock></CtaBlock>
        <CaseStudy></CaseStudy>
        <ProcessBlock></ProcessBlock>

        <Team></Team>

        <ContactUs></ContactUs>
        <Footer></Footer>
        

    </div>
  )
}

export default Home