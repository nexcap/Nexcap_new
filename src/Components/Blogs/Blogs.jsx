import React from "react";
import { Link } from "react-router-dom";
import SEO from "./blogs-imgs/seo-poster-Nexcap.png";
import VR from "./blogs-imgs/vr-poster-Nexcap.png";
import MERN from "./blogs-imgs/mern-poster-Nexcap.png";
const Blogs = () => {
  return (
    <>
      <br id="blogs" />
      <br />
      <br />

      <div className="mb-20 ">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-300">
          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">
              Our Blogs
            </h2>
           
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seo blog */}
            <Link
              to="/Beginner's-Guide-to-SEO:-Getting-Started-with-Search-Engine-Optimization"
              class="group rounded-xl p-5   transform transition duration-200 ease-in-out hover:-translate-y-2"
            >
              <div class="aspect-w-16 aspect-h-10">
                <img
                  class="w-full object-cover rounded-xl h-60"
                  src={SEO}
                  alt="SEO - Nexcap"
                />
              </div>
              <h3 class="mt-5 text-xl  hover:text-white h-20">
                Understanding SEO: The Key to Online Visibility
              </h3>
              <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-yellow-200">
                Learn more
                <svg
                  class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
              </p>
            </Link>

            {/* mern blog */}
            <Link
              to="/Exploring-the-Basics-of-MERN-Development:-A-Comprehensive-Guide"
              class="group rounded-xl p-5   transform transition duration-200 ease-in-out hover:-translate-y-2"
            >
              <div class="aspect-w-16 aspect-h-10">
                <img
                  class="w-full object-cover rounded-xl h-60"
                  src={MERN}
                  alt="Mern development - Nexcap"
                />
              </div>
              <h3 class="mt-5 text-xl  hover:text-white h-20">
                A Comprehensive Roadmap for Web Development with MERN Stack:
                Your Ultimate Guide
              </h3>
              <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-yellow-200">
                Learn more
                <svg
                  class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
              </p>
            </Link>

            {/* VR blog */}
            <Link
              to="/Explore-the-Boundless-Realms-of-Virtual-Reality-Technology"
              class="group rounded-xl p-5   transform transition duration-200 ease-in-out hover:-translate-y-2"
            >
              <div class="aspect-w-16 aspect-h-10">
                <img
                  class="w-full object-cover rounded-xl h-60"
                  src={VR}
                  alt="Virtual Reality - Nexcap"
                />
              </div>
              <h3 class="mt-5 text-xl  hover:text-white h-20">
              The Rise of Virtual Reality in Gaming and Entertainment: A
                Game-Changing Evolution
              </h3>
              <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-yellow-200">
                Learn more
                <svg
                  class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
              </p>
            </Link>

          

     
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Blogs;
