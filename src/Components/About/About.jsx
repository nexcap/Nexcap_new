import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <br  id="about"/><br /><br />
      <section className="bg-black mx-4 my-10 md:mx-20"> 
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Nexcap is a leading software development company dedicated to
                transforming ideas into digital realities. With a focus on web,
                mobile, and desktop applications, we specialize in creating
                cutting-edge solutions that empower businesses to thrive in the
                digital age ...
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-yellow-500 hover:text-yellow-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
                style={{ maxWidth: "100%" }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
