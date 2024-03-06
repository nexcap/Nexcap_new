
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {

    AOS.init();
  return (
    <>
   
    <div class="mx-auto  mb-28 max-w-7xl px-6 lg:px-8"  >
    <div
        class="relative isolate overflow-hidden bg-[#1b1a1a] px-6 py-14 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-20" data-aos="zoom-in" >
       
        <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Keep Updated
        </h2>

        <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Keep pace with SecureCloud 
            advancements! Join our mailing list for selective, noteworthy updates.
        </p>

        <form class="mx-auto mt-10 flex flex-col items-center max-w-md gap-x-4">

        <div class="text-center">
              <a
                class=" inline-flex justify-center items-center gap-x-3 text-center text-yellow-700 transition-all transform border border-yellow-500 hover:bg-yellow-600 dark:border-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-100 dark:hover:border-yellow-500 dark:text-yellow-400 hover:text-gray-100 text-sm font-medium rounded-full  py-3 px-6"
                href="#"
              >
                Get started
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
              </a>
            </div>     </form>

        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7">
            </circle>
            <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stop-color="#f7b810"></stop>
                    <stop offset="1" stop-color="#f7b810" stop-opacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>

    </div>
</div>
    </>
  );
}

export default Footer;
