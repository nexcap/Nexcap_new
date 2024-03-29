import React from "react";
import abt from "../../imgs/about.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const About = () => {
  AOS.init();
  return (
    <div>
      <section class="flex items-center py-20  " id="about">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
          <div class="relative max-w-xl mx-auto">
            <img
              src={abt}
              alt="About - Nexcap"
              class="relative z-20 opacity-10 object-cover w-full rounded-2xl h-96"
              data-aos="zoom-in-right"
            />

            <div
              class="bottom-0 z-40 mt-10 -mb-20 lg:absolute lg:right-0 lg:-mr-44 lg:mt-0 "
              data-aos="zoom-in-left"
            >
              <div class="w-full p-8 border shadow-sm border-gray-700 lg:w-96  bg-[#696666]  backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-2xl">
                <h2 class="mb-4 text-4xl font-bold text-gray-600 dark:text-gray-300">
                  About Us
                </h2>
                <p class="pb-4 mb-4 text-gray-100 ">
                  Nexcap is a leading software development company dedicated to
                  transforming ideas into digital realities. With a focus on
                  web, mobile, and desktop applications, we specialize in
                  creating cutting-edge solutions that empower businesses to
                  thrive in the digital age  ... 
                </p>
                <div>
                  <Link
                    to="/about"
                    class=" inline-flex justify-center items-center gap-x-3 text-center text-yellow-500 transition-all transform border border-yellow-500  hover:text-gray-100 text-sm font-medium rounded-full  py-2 px-4"
                  >
                    Read more
                    <svg
                      class="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
