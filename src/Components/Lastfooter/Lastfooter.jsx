import React from "react";
import Footerimg from "../../imgs/footerlogo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Lastfooter() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 ">
          <div class="col-span-full hidden lg:col-span-1 lg:block mr-5">
            <img src={Footerimg} alt="" className="w-32" />
            <p className="text-gray-200 mt-2 ">
              
            </p>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase text-gray-200">
              Learn more
            </h4>

            <div class="mt-3 grid space-y-3 text-sm text-gray-400 ">
              <p>
                <Link
                  to="privacy"
                  class="inline-flex gap-x-2 hover:text-gray-200"
                >
                  Privacy
                </Link>
              </p>
              <p>
                <Link
                  to="terms"
                  class="inline-flex gap-x-2 hover:text-gray-200"
                >
                  Terms and Conditions
                </Link>
              </p>

              <p>
                <a
                  href="https://nexcap.statuspage.io/"
                  class="inline-flex gap-x-2 hover:text-gray-200"
                >
                  Status
                </a>
              </p>
              <p>
                <Link
                  to="refund"
                  class="inline-flex gap-x-2 hover:text-gray-200"
                >
                  Refund Policy
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Company
            </h4>

            <div class="mt-3 grid space-y-3 text-sm text-gray-400 ">
              <p>
                <a
                  class="inline-flex gap-x-2  hover:text-gray-200"
                  href="#about"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2  hover:text-gray-200"
                  href="/#blogs"
                >
                  Blogs
                </a>
              </p>
              <p>
                <div class="inline-flex gap-x-2 text-gray-400 ">Careers</div>{" "}
                <span class="inline text-yellow-500">— We're hiring soon</span>
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
              Navigation
            </h4>

            <div class="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                  href="/#hero"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                  href="/#features"
                >
                  Features
                </a>
              </p>

              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                  href="/#faqs"
                >
                  FAQ
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                  href="/#testimonials"
                >
                  Testimonial
                </a>
              </p>
              <p>
                <a
                  class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 "
                  href="/#contact"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100 pb-4">
              get in touch
            </h4>
            <div className="flex flex-col ">
              <a
                href="https://www.google.com/maps/dir/13.0216205,80.176346/No-37,+Palani+Nagar,+Chitteri,+thorapadi,Vellore+-+632002/@12.9624529,78.9885176,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bad3948430b629d:0xae0fd2f649d9a6a9!2m2!1d79.1193145!2d12.8752016?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-gray-400 hover:text-gray-200  text-sm
                "
              >
                No-37, Palani Nagar, Chitteri, thorapadi,Vellore - 632002
              </a>
              <br />
            </div>
            <div>
              <p className="text-white"></p>
            </div>

            <a href="mailto:info@nexcap.net">
              {" "}
              <h4 class="cursor-pointer mt-3 text-base  text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                info@nexcap.net
              </h4>
            </a>
            <br></br>
            <a href="tel:+91 8124361310">
              {" "}
              <p className=" text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-base">
                +91 8124361310
              </p>
            </a>
          </div>
        </div>
        <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-200">
              © {year} NEXCAP. All rights reserved
            </p>
          </div>

          <div className="pr-8">
            <a
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.facebook.com/profile.php?id=100090766908092&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://youtube.com/@nexcapofficial?si=RdOhYf8nczJ0mji8"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="mx-auto w-4 h-4 flex-shrink-0" />
            </a>
            <a
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10  disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://twitter.com/nexcap_official?t=Rki-EdWeKDUN3vnbsPyb7g&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="mx-auto w-4 h-4 flex-shrink-0" />
            </a>
            <a
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.instagram.com/nexcap_official?igsh=M3A3eWhmNHN3ZWlw"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="mx-auto w-4 h-4 flex-shrink-0" />
            </a>
            <a
              class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.linkedin.com/company/nexcapdev/"
              target="blank"
            >
              <FaLinkedinIn className="mx-auto w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Lastfooter;
