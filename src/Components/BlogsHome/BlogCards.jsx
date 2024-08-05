import React from "react";
import { Link } from "react-router-dom";
import B1 from "./blogs-imgs/seo-poster-Nexcap.png";
import B2 from "./blogs-imgs/mern-poster-Nexcap.png";
import B3 from "./blogs-imgs/vr-poster-Nexcap.png";

const BlogCards = () => {
  const blogsData = [
    {
      title: "Understanding SEO: The Key to Online Visibility",
      alt:"Understanding SEO: The Key to Online Visibility - Nexcap",
      imageSrc: B1,
      description:
        "Learn more about Search Engine Optimization and its importance in online visibility.",
      link: "/Beginner's-Guide-to-SEO:-Getting-Started-with-Search-Engine-Optimization",
    },
    {
      title: "A Comprehensive Roadmap for Web Development with MERN Stack: Your Ultimate Guide",
      alt:"A Comprehensive Roadmap for Web Development with MERN Stack: Your Ultimate Guide - Nexcap",
      imageSrc: B2,
      description:
        "Explore the basics of MERN development and learn how to build web applications.",
      link: "/Exploring-the-Basics-of-MERN-Development:-A-Comprehensive-Guide",
    },
    {
      title: "The Rise of Virtual Reality in Gaming and Entertainment: A Game-Changing Evolution",
      alt:"The Rise of Virtual Reality in Gaming and Entertainment: A Game-Changing Evolution - Nexcap",
      imageSrc: B3,
      description:
        "Discover the boundless realms of Virtual Reality and its impact on gaming and entertainment.",
      link: "/Explore-the-Boundless-Realms-of-Virtual-Reality-Technology",
    },
  ];

  return (
    <>
      <br id="blogs" />
      <br />
      <br />

      <div className="mb-20">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-300">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our Blogs</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogsData.map((blog, index) => (
              <Link
                key={index}
                to={blog.link}
                className="group rounded-xl p-5 transform transition duration-200 ease-in-out hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    className="w-full object-cover rounded-xl h-60"
                    src={blog.imageSrc}
                    alt={blog.alt}
                  />
                </div>
                <h3 className="mt-5 text-xl hover:text-white h-20">{blog.title}</h3>
                <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-yellow-200">
                  Learn more
                  <svg
                    className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center"> {/* Centering flex container */}
          <Link
            to="/Blogs"
            className="inline-flex justify-center items-center gap-x-3 text-center text-yellow-500 transition-all transform border border-yellow-500 hover:text-gray-100 text-sm font-medium rounded-full py-2 px-4"
          >
            View More
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
