import React from "react";
import About from "../About/About";
import KK from "../../imgs/abijpeg.jpeg";
import ScrollToTop from "../../ScrollToTop";
import { Helmet } from "react-helmet";

const Abi = () => {
  return (
    <>
      <Helmet>
        <title>Abi Nandhan R - Nexcap</title>
        <meta
          name="description"
          content="Currently I'm doing my best in the Department of Development in Nexcap"
        />
        <meta
          name="keywords"
          content="Abi Nandhan , Abi Nandhan nexcap, Abi Nandhan nexcap,Nexcap , Nexcap company , Nexcap Inc."
        />
        <meta name="author" content="Nexcap" />
      </Helmet>

      <ScrollToTop />
      <div>
        <h1 className="text-gray-50 flex justify-center text-2xl font-bold">
          PROFILE
        </h1>
        {/* profile content */}

        <div class="px-2 py-4 mt-7 flex flex-col justify-center items-center text-center">
          <img
            class="inline-flex object-cover border-4  border-yellow-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-yellow-600/100 bg-yellow-50  text-yellow-600  !h-48 !w-48"
            alt="Krishnakumar R ceo nexcap"
            src={KK}
          />
          <h1 class="text-2xl text-gray-50 font-bold mt-3">Abi Nandhan R</h1>
          <h2 class="text-base md:text-xl text-gray-50 font-bold mt-2">
            Developer @
            <a
              href="/"
              class="text-yellow-500 hover:text-gold-600 font-bold border-b-0 transition-all mb-2"
            >
              . NEXCAP
            </a>
          </h2>
          <ul class="flex flex-row mt-3">
            <li class="mx-2">
              <a
                href="https://www.linkedin.com/in/abi-nandhan-3141a9248/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  class="h-6 text-yellow-400 hover:text-yellow-300"
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
          </ul>
        </div>

        <About />
      </div>
    </>
  );
};

export default Abi;
