import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./InternTest.css";
const InternTest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const interntest = [
   
    {
      name: "Kanishka A",
      content:
        "The full-stack web development internship was great. It improved my coding skills and gave me real project experience. The guidance helped me get ready for a career in web development.",
    },
    {
      name: "Gokulakrishnan M",
      content:
        "I got to learn something new with the company's help. They support learning.",
    },
    {
      name: "Santhosh S",
      content:
        "It's a good experience to work with Nexcap as a Full Stack Intern. I've acknowledged the hard work and dedication of the Nexcap group.",
    },
  ];
  return (
    <section className="py-12 bg-black mx-10 md:mx-0">
      <div className="max-w-[75rem] mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-300">
              Testimonials
            </h2>
          </div>
        <Slider {...settings}>
          {interntest.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="mb-8 rounded-xl shadow bg-[#696666] backdrop-filter backdrop-blur-lg bg-opacity-30 transform transition duration-200 ease-in-out  overflow-hidden">
                <div className="relative z-20 p-8 -mt-15">
                  <span className="inline-block md:p-3 p-1 mb-3 text-xs text-white bg-yellow-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <p className="mb-4 md:text-base text-sm md:leading-7 leading-5 text-white text-left">
                    {item.content}
                  </p>
                  <p className="text-gray-300 text-right">- {item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InternTest;
