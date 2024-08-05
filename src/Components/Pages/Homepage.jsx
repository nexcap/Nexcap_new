import React from "react";
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import About from "../About/About";
import Features from "../Features/Features";
import Services from "../Services/Services";

import Blogs from "../BlogsHome/BlogCards";
import Faqs from "../FAQs/Faqs";
import Contact from "../Contact/Contact";
import SMS from "../SMS/SMS";

import HomeTestimonials from "../Testimonials/HomeTestimonials";
import HomeInternship from "../Internships/HomeInternship";


function Homepage() {
  
    
  return (
    <>
    <div className="md:px-0 px-5">
       

      <Hero />
      <Stats />
      <About />
      <Features />
      <Services />
      <SMS />

      <HomeTestimonials />
      <HomeInternship />

      <Blogs />
      <Faqs />
      <Contact />
    </div></>
  );
}

export default Homepage;
