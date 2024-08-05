import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdSystemUpdateAlt } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
const Features = () => {
  return (
    <div>
    
    <br id="features"/><br />

      <section className="py-10 sm:py-16 lg:py-24" >
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Why Us ???
          </h3>
          <p className="mt-3 text-2xl leading-relaxed text-gray-300 md:mt-8">
          The service we offer is specifically designed to meet your needs.
          </p>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-[#696666] rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30      transform transition duration-200 ease-in-out hover:-translate-y-2">
                <svg
                  className="text-yellow-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
                Secured details
              </h3>
              <p className="mt-4 font-medium text-amber-100">
              The Details which we are collecting from the client side is always trust worthy.
              </p>
            </div>

            <div>
              <div className="flex items-center text-yellow-500 justify-center w-20 h-20 mx-auto bg-[#696666] rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30      transform transition duration-200 ease-in-out hover:-translate-y-2">
              <BiSolidPhoneCall className="w-10 h-10"/>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
              24/7 Support
              </h3>
              <p className="mt-4 font-medium text-amber-100">
              We have 24/7 email, chats support from our side.
              </p>
            </div>

            <div>
              <div className="flex items-center text-yellow-500 justify-center w-20 h-20 mx-auto bg-[#696666] rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30        transform transition duration-200 ease-in-out hover:-translate-y-2">
              <MdSystemUpdateAlt className="w-10 h-10"/>
                 
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
              Monthly Updates
              </h3>
              <p className="mt-4 font-medium text-amber-100">
              Our clients are aware of there products which are build by us.
              </p>
            </div>

            <div>
              <div className="flex items-center text-yellow-500 justify-center w-20 h-20 mx-auto bg-[#696666] rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30     transform transition duration-200 ease-in-out hover:-translate-y-2">
              <IoMdHappy className="w-10 h-10" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
              Happy Customers
              </h3>
              <p className="mt-4 font-medium text-amber-100">
              Clients of Nexcap are always be satisfied of our work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
