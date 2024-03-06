import React from "react";
import "./Hero.css";
import home from '../../imgs/home-nexcap.png'


const Hero = () => {
  return (
    <div>
      <div id="hero"          >
        <section>
          <div className="max-w-screen-xl md:h-[700px] sm:h-[600px]  h-[500px] mx-auto px-4 py-20 gap-12 text-gray-600  overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-2xl">
             <a href="#contact">
              <div
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-gray-400 text-gray-200 hover:text-black"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-yellow-500 text-gray-800">
                  News
                </span>
                <p className="flex items-center">
                10% Offer on every service
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              </a>
              <h1 className="text-4xl text-gray-100 font-medium sm:text-6xl">
                <span className="text-yellow-500">Nexcap</span> - Website
                developers Crafting project specific solutions with expertise.
              </h1>
              <p className="text-yellow-500 font-medium sm:text-xl">
                We’re a creative company that focuses on establishing long-term
                relationships with customers.
              </p>
            
            </div>
            <div className="flex-1 hidden md:block flo">
      
              <img
                src={home}
                className="max-w-xl"
                alt="A boy working in a system 3D illustration - Nexcap"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
