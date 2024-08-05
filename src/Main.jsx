import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Aboutblog from "./Components/Blogpages/Aboutblog/Aboutblog";
import Homepage from "./Components/Pages/Homepage";
import Privacy from "./Components/FootPages/Privacy";
import Terms from "./Components/FootPages/Terms";
import Refund from "./Components/FootPages/Refund";
import Blog1 from "./Components/Blogpages/Blog1/SEO";
import Blog2 from "./Components/Blogpages/Blog2/MERN";
import Blog3 from "./Components/Blogpages/Blog3/VR";

import Krishna from "./Components/Profiles/Krishna";
import Jana from "./Components/Profiles/Jana";
import Mohana from "./Components/Profiles/Mohana";
import Pratheema from "./Components/Profiles/Pratheema";
import Praveen from "./Components/Profiles/Praveen";
import Abi from "./Components/Profiles/Abi";
import IntershipPage from "./Components/Pages/IntershipPage";
import ScrollToTop from "./ScrollToTop";

import P1Frontend from "./Components/Internships/P1Frontend";
import P2Fullstack from "./Components/Internships/P2Fullstack";
import P3Java from "./Components/Internships/P3Java";
import P4Python from "./Components/Internships/P4Python";
import BlogPage from "./Components/Pages/BlogPage";
function Main() {
  return (
    <ScrollToTop>
    <Routes>


      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={ <Aboutblog />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="refund" element={<Refund/>} />
        <Route path="/Blogs/Beginner's-Guide-to-SEO:-Getting-Started-with-Search-Engine-Optimization" element={<Blog1/>} />
        <Route path="/Blogs/Exploring-the-Basics-of-MERN-Development:-A-Comprehensive-Guide" element={<Blog2/>} />
        <Route path="/Blogs/Explore-the-Boundless-Realms-of-Virtual-Reality-Technology" element={<Blog3/>} />
        <Route path="Krishnakumar-CEO" element={<Krishna/>} />
        <Route path="Janapriya" element={<Jana/>} />
        <Route path="Mohana" element={<Mohana/>} />
        <Route path="Pratheema" element={<Pratheema/>} />
        <Route path="Praveen" element={<Praveen/>} />
        <Route path="Abi" element={<Abi/>} />


        <Route path="/Blogs" element={<BlogPage/>}/>
        <Route path="/Internships" element={<IntershipPage/>}/>
        
        <Route path="/Internships/Frontend-Web-Development" element={<P1Frontend/>}/>
        <Route path="/Internships/Full-Stack-Web-Development" element={<P2Fullstack/>}/>
        <Route path="/Internships/Java-Programming" element={<P3Java/>}/>
        <Route path="/Internships/Python-Programming" element={<P4Python/>}/>
       
      </Route>
   
    </Routes>

    </ScrollToTop>
  );
}

export default Main;
