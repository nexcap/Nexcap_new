import React from "react";
import About from "../About/About";
import Profile from "../../imgs/Krishnakumar-CEO.jpeg";
import ScrollToTop from "../../ScrollToTop";
import { Helmet } from "react-helmet";

const Krishna = () => {
  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Krishnakumar R",
    url: "https://nexcap.net/Krishnakumar-CEO",
    image:
      "https://media.licdn.com/dms/image/D5635AQGCkVV8p2Cp0w/profile-framedphoto-shrink_400_400/0/1691852568688?e=1710306000&v=beta&t=0c9pXfGjg_NGyXKAN2ADontEC40eX3Cuczn1mM6wyrU",
    sameAs: "https://www.linkedin.com/in/krishnakumarceo/",
    jobTitle: "Founder & CEO",
    birthDate: "21-05-2004",
    birthPlace: "Vellore, Tamilnadu",
    worksFor: {
      "@type": "Organization",
      name: "Nexcap",
    },
  };
  return (
    <>
      <Helmet>
        <title>Krishnakumar R Founder & CEO - Nexcap</title>
        <meta
          name="description"
          content="Krishnakumar R is the visionary founder and Chief Executive Officer of NEXCAP, With a proven track record of leadership and innovation, Krishnakumar has steered NEXCAP to new heights, driving the company's growth and success."
        />
        <meta
          name="keywords"
          content="krishnakumar R CEO, krishnakumar R nexcap CEO, krishnakumar R nexcap, kk Nexcap, Ceo Nexcap,Nexcap , Nexcap company , Nexcap Inc."
        />
        <meta name="author" content="Nexcap" />
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </Helmet>

      <ScrollToTop />
      <div>
        <h1 className="text-gray-50 flex justify-center text-2xl font-bold">
          PROFILE
        </h1>
        {/* profile content */}

        <div className="px-2 py-4 mt-7 flex flex-col justify-center items-center text-center">
          <img
            className="inline-flex object-cover border-4  border-yellow-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-yellow-600/100 bg-yellow-50  text-yellow-600   !h-48 !w-48"
            alt="Krishnakumar R ceo nexcap"
            src={Profile}
          />
          <h1 className="text-2xl text-gray-50 font-bold mt-3">Krishnakumar R</h1>
          <h2 className="text-base md:text-xl text-gray-50 font-bold mt-2">
            Founder & CEO @
            <a
              href="/"
              className="text-yellow-500 hover:text-gold-600 font-bold border-b-0 transition-all mb-2"
            >
              . NEXCAP
            </a>
          </h2>
          <ul className="flex flex-row mt-3">
            <li className="mx-2">
              <a
                href="https://www.linkedin.com/in/krishnakumarceo/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 text-yellow-400 hover:text-yellow-300"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>{" "}
              </a>
            </li>

            <li className="mx-2">
              <a href="mailto:ceo@nexcap.net" rel="noreferrer" target="_blank" aria-label="Email">
                <svg
                  className="h-6 text-yellow-400 hover:text-yellow-300"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mail.Ru</title>
                  <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path>
                </svg>{" "}
              </a>
            </li>
          </ul>
        </div>

        <About />
      </div>
    </>
  );
};

export default Krishna;
