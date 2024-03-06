import React from "react";
import phone from "../../imgs/phone.jpg";
import desk from "../../imgs/desk.jpg";
import web from "../../imgs/web.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  AOS.init();

  const service = [
    {
      name: "  Desktop App Development ",
    },
    {
      name: "  Mobile App Development ",
    },
    {
      name: " Website Development  ",
    },
  ];

  return (
    <div>
      <div>
        <div
          class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto"
          id="services"
        >
          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Services
            </h2>
          </div>

          <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div class="lg:col-span-7">
              <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div
                  class="col-span-4"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <img class="rounded-xl" src={web} alt="Webapp development - Nexcap" />
                </div>

                <div
                  class="col-span-3"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <img class="rounded-xl" src={phone} alt="Mobile App development - Nexcap" />
                </div>

                <div
                  class="col-span-5"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                >
                  <img class="rounded-xl" src={desk} alt="Desktop App development - Nexcap" />
                </div>
              </div>
            </div>

            <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div class="space-y-6 sm:space-y-8">
                <div class="space-y-2 md:space-y-4">
                  <h2 class="font-medium text-3xl lg:text-4xl text-amber-100">
                    We bring solutions to make life easier for our clients.
                  </h2>
                </div>

                <ul role="list" class="space-y-2 sm:space-y-4">
                  {service.map((item, idx) => (
                    <li key={idx} class="flex space-x-3">
                      <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-yellow-200 text-black ">
                        <svg
                          class="flex-shrink-0 h-3.5 w-3.5"
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
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>

                      <span class="text-sm sm:text-base text-white">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
