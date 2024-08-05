import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./HomeTestimonials.css";
const HomeTestimonials = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true, // Set to true for infinite loop
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true,
    //         },
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };
    
      const testcontent = [
        {
          name: "Pratheema",
          content:
            "Nexcap really improved our website! They understood what we wanted and made it look amazing. Now, our website works well and we are getting more visitors and sales. I definitely suggest Nexcap for anyone who needs web development!"
       
        },
        {
          name: "Mohana",
          content:
            "Nexcap is doing a great job with their web development service. The website looks good and fits our brand perfectly. Thanks to Nexcap for making our website so impressive."
         
        },
        {
          name: "Jana",
          content:
            "Choosing Nexcap for our website was one of the best decisions we made. They were highly professional, careful in their approach, and experts in their field. They supported us to make our website better than our expectations. Nexcap is highly recommended for web development services."
         
        }
      ];
    
      return (
        <>
         <br id="testimonials"/><br /><br />
    
          <section className="flex items-center" >
            <div className="p-4 mx-auto max-w-7xl">
              <div className="text-center mb-14">
                <h1 className="mb-4 text-3xl font-bold text-white">
                  {" "}
                  Testimonials{" "}
                </h1>
                <p className="max-w-xl mx-auto text-amber-100">
                Customer satisfaction at its best - hear what our clients have to say about their extraordinary experiences!
                </p>
              </div>
              <div className="flex ">
                <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {testcontent.map((item, idx) => (
                  <div key={idx} className="mb-8  rounded-xl shadow  bg-[#696666] backdrop-filter backdrop-blur-lg bg-opacity-30      transform transition duration-200 ease-in-out hover:-translate-y-2">
                    <div className="relative z-20 p-8 -mt-14 ">
                      <span className="inline-block p-3 mb-3 text-xs text-white bg-yellow-600 rounded-full">
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
                      <p className="mb-4 text-base leading-7 text-white h-[200px] text-justify">
                      {item.content}
                      </p>
                    
                    </div>
                  </div>
                  ))}
                
                </div>
              </div>
            </div>
          </section>
    
          {/*  */}
        </>
      );
}

export default HomeTestimonials