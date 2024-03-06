import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Aboutblog from "./Components/Blogpages/Aboutblog/Aboutblog";
import Homepage from "./Components/Pages/Homepage";
import Privacy from "./Components/Foot/Privacy";
import Terms from "./Components/Foot/Terms";
import Refund from "./Components/Foot/Refund";
import Blog1 from "./Components/Blogpages/Blog1/SEO";
import Blog2 from "./Components/Blogpages/Blog2/MERN";
import Blog3 from "./Components/Blogpages/Blog3/VR";

import Krishna from "./Components/Profiles/Krishna";
import Jana from "./Components/Profiles/Jana";
import Mohana from "./Components/Profiles/Mohana";
import Pratheema from "./Components/Profiles/Pratheema";
import Praveen from "./Components/Profiles/Praveen";
import Abi from "./Components/Profiles/Abi";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={ <Aboutblog />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="refund" element={<Refund/>} />
        <Route path="Beginner's-Guide-to-SEO:-Getting-Started-with-Search-Engine-Optimization" element={<Blog1/>} />
        <Route path="Exploring-the-Basics-of-MERN-Development:-A-Comprehensive-Guide" element={<Blog2/>} />
        <Route path="Explore-the-Boundless-Realms-of-Virtual-Reality-Technology" element={<Blog3/>} />
        <Route path="Krishnakumar-CEO" element={<Krishna/>} />
        <Route path="Janapriya" element={<Jana/>} />
        <Route path="Mohana" element={<Mohana/>} />
        <Route path="Pratheema" element={<Pratheema/>} />
        <Route path="Praveen" element={<Praveen/>} />
        <Route path="Abi" element={<Abi/>} />
      </Route>
    </Routes>
  );
}

export default Main;
