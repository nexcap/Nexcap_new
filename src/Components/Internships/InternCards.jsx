import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import P1 from "./InternImgs/Front_end_intern.png";
import P2 from "./InternImgs/Full-stack_intern.png";
import P3 from "./InternImgs/Java_intern.png";
import P4 from "./InternImgs/Python_intern.png";
const InternCards = () => {
  const internshipData = [
    {
      id: 1,
      title: "Frontend Web Development",
      alt:"Frontend Web Development - Nexcap",
      image: P1,
      link: "/Internships/Frontend-Web-Development",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      alt:"Full Stack Web Development - Nexcap",
      image: P2,
      link: "/Internships/Full-Stack-Web-Development",
    },
    {
      id: 3,
      title: "Java programming",
      alt:"Java programming - Nexcap",
      image: P3,
      link: "/Internships/Java-Programming",
    },
    {
      id: 3,
      title: "Python programming",
      alt:"Python programming - Nexcap",
      image: P4,
      link: "/Internships/Python-Programming",
    }
  ];

  return (
    <>
      
      <div className="mb-20">
        <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-300">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Our Internship Programs or Offers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipData.map((program) => (
              <div key={program.id} className="group rounded-xl p-5 transform transition duration-200 ease-in-out ">
                <div className="block">
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      className="w-full object-cover rounded-xl h-60"
                      src={program.image}
                      alt={program.alt}
                    />
                  </div>
                  <h3 className="mt-5 font-bold text-2xl hover:text-white h-10">
                    {program.title}
                  </h3>
                </div>

                <div className="flex justify-start mt-4">
                  <Link to={program.link} className="w-60%">
                    <button
                      type="submit"
                      className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InternCards;
