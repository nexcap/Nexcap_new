import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

 


  return (
    <>
      <br id="contact" />
      <br />
      <br />
      <div class="relative">
        <div class="max-w-[85rem] mt-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l text-yellow-500 text-transparent ">
                Contact Us
              </p>

              <div class="mt-4 md:mb-12 max-w-2xl">
                <h1 class="mb-4 font-semibold text-4xl lg:text-5xl text-gray-200">
                  We're here to assist you! Feel free to contact us
                </h1>
              </div>

              <blockquote class="hidden md:block relative max-w-sm">
                <svg
                  class="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-yellow-300"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div class="relative z-10">
                  <p class="text-xl italic text-yellow-100">
                    We're here to serve you with a smile - your satisfaction is
                    our priority.
                  </p>
                </div>
              </blockquote>
            </div>

            <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 class="mb-8 text-xl text-center font-semibold text-gray-800 dark:text-gray-200">
                Get in touch
              </h2>
              
              <form action="https://formsubmit.co/nexcap.official@gmail.com" method="POST" >
                <div class="grid gap-4">
                  <div>
                    <label htmlFor="name" class="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      // value={formData.name}
                    
                      class="py-3 px-4 block w-full rounded-lg text-sm focus:border-yellow-200  disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
                      placeholder="Name"
                    />

          
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" class="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        // value={formData.email}
                     
                        autocomplete="email"
                        class="py-3 px-4 block w-full rounded-lg text-sm focus:border-yellow-200  disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
                        placeholder="Email"
                      />
                  
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" class="sr-only">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="PhoneNumber"
                        // value={formData.phoneNumber}
                     
                        class="py-3 px-4 block w-full rounded-lg text-sm focus:border-yellow-200  disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
                        placeholder="Phone Number"
                      />
                  
                    </div>
                  </div>

                  <div>
                    <label for="hs-about-contacts-1" class="sr-only">
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="contacts"
                      rows="4"
                      class="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div class="mt-4 grid">
                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send inquiry
                  </button>
                </div>

                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-300">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
