import React from "react";
import woman from '../../imgs/woman.png'
import man from '../../imgs/man.png'
import man2 from '../../imgs/man2.png'
function Testimonial() {
  const test = [
    {
      // name: "pratheema",
      content:
        "Nexcap really improved our website! They understood what we wanted and made it look amazing. Now, our website works good and we are getting more visitors and sales. I definitely suggest Nexcap for anyone who needs web development!",
      // image:woman,
    },

    {
      // name: "mohana",
      content:
        "Nexcap is doing a great job with their web development service.The website looks good and fits to our brand perfectly.Thanks to Nexcap, for making our website so impressive.",
      // image:man2,
    },
    {
      // name: "jana",
      content:
        "Choosing Nexcap for our website was one of the best decision we made. They were highly professional, carefull in their approach, and experts in their field. They supported us to make our website better than our expectation.Nexcap is highly recommend for web development services.",
      // image:man,
    },
   
  ];

  return (
    <>
     <br id="testimonials"/><br /><br />

      <section class="flex items-center" >
        <div class="p-4 mx-auto max-w-7xl">
          <div class="text-center mb-14">
            <h1 class="mb-4 text-3xl font-bold text-white">
              {" "}
              Testimonials{" "}
            </h1>
            <p class="max-w-xl mx-auto text-amber-100">
            Customer satisfaction at its best - hear what our clients have to say about their extraordinary experiences!
            </p>
          </div>
          <div class="flex ">
            <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {test.map((item, idx) => (
              <div key={idx} class="mb-8  rounded-xl shadow  bg-[#696666] backdrop-filter backdrop-blur-lg bg-opacity-30      transform transition duration-200 ease-in-out hover:-translate-y-2">
                <div class="relative z-20 p-8 -mt-14 ">
                  <span class="inline-block p-3 mb-3 text-xs text-white bg-yellow-600 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <p class="mb-4 text-base leading-7 text-white h-[200px] text-justify">
                  {item.content}
                  </p>
                  {/* <div class="flex items-center gap-x-4">
                    <div class="relative w-16 h-16 overflow-hidden rounded-full">
                      <img
                        class="object-cover w-full h-full transition-all "
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div class="info">
                      <h2 class="text-lg font-medium text-amber-100">
                      {item.name}
                      </h2>

                    </div>
                  </div> */}
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

export default Testimonial;
