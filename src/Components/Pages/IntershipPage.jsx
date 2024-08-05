import React from "react";

// import Stats from "../Stats/Stats";
import { Helmet } from "react-helmet";


import InternCards from "../Internships/InternCards";

import InternTest from "../Internships/InternTestimonials/InternTest";
import InternFAQS from "../Internships/InternFAQS/InternFAQS";
import InternTop from "../Internships/InternTop";


const IntershipPage = () => {
  return (
    <div>
    <Helmet>
        <title>Nexcap - Internships</title>
        <meta
          name="description"
          content="Nexcap offers dynamic internship opportunities across various domains, including web development, Python programming, Java programming, and more."
        />
        <meta
          name="keywords"
          content="Nexcap, internship,  Nexcap company , Nexcap Inc. ,Nexcap Internship, Online Internship"
        />
        <meta name="author" content="Nexcap Internship" />
      </Helmet>
      <InternTop/>
      <InternCards />
    
      <InternTest/>
      <InternFAQS/>
    
    </div>
  );
};

export default IntershipPage;
