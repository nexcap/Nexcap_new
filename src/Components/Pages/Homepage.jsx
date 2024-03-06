import React from 'react'
import Hero from '../Hero/Hero'
import Stats from '../Stats/Stats'
import About from '../About/About'
import Features from '../Features/Features'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import Blogs from '../Blogs/Blogs'
import Faqs from '../FAQs/Faqs'
import Contact from '../Contact/Contact'
import SMS from '../SMS/SMS'

function Homepage() {
  return (
    <div>
        <Hero />
        <Stats />
        <About />
        <Features />
        <Services />
        <SMS />
        <Testimonial />
        <Blogs />
        <Faqs />
        <Contact />
    </div>
  )
}

export default Homepage