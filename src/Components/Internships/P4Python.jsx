import React from "react";
import ScrollToTop from "../../ScrollToTop";

import { Helmet } from "react-helmet";
import InternSocial from "./InternSocial";

const P4Python = () => {
  const Program4 = [
    {
      title: "Python programming",
      description:
        "We are hiring for Python programming Interns.",
      res1: "Developing applications using Python technologies.",
      qua1: "Knowledge of Python programming language.",
      qua2: "Proficiency in English Language.",
      qua3: "Access to PC/Laptop with Internet",
      qua4: "B.E/B.Tech,B.Sc, BCA (Any Steam)",
      ben1: "Certificate of Internship.",
      ben2: "Guidance From Expert Trainers",
      ben3: "Letter of Recommendation",

        applylink:"https://forms.gle/m7fbUUoSWyF2atTm9"
    },
  ];
  return (
    <>
    <Helmet>
        <title>
        Python internship - Nexcap 
        </title>
        <meta
          name="description"
          content="We are hiring for Python programming Interns. Interested candidates can apply.."
        />
        <meta
          name="keywords"
          content="Nexcap, internship,  Nexcap company , Nexcap Inc. ,Nexcap Internship, Online Internship"
        />
        <meta name="author" content="Nexcap internship" />
      </Helmet>
      <div>
        <ScrollToTop>
          {Program4.map((item, idx) => (
            <div
              key={idx}
              className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-gray-300"
            >
              <div className="max-w-4xl">
                <div className=" justify-center items-center flex-col mb-5">
                  <div className="mt-20 w-full h-36 rounded-xl bg-[url('https://horizon-ui.com/horizon-tailwind-react/static/media/Nft3.3b3e6a4b3ada7618de6c.png')] bg-cover bg-center">
                    <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                      <span className="text-amber-100 text-4xl  text-center">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-y-8 lg:gap-y-0 lg:gap-x-6">
                <div className="lg:col-span-2">
                  <div className="py-8 lg:pe-8">
                    <div className="space-y-5 lg:space-y-8">
                      <h2 className="text-2xl font-bold">{item.description}</h2>

                      {/* button  */}
                      <div
                        style={{ marginTop: "8px" }}
                        className="inline-flex items-center mr-2 gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-base font-medium tracking-tight md:tracking-wider sm:text-sm bg-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600"
                      >
                        Free
                      </div>
                      <div
                        style={{ marginTop: "8px" }}
                        className="inline-flex items-center gap-1.5 py-1 mr-2 px-3 sm:py-2 sm:px-4 rounded-full text-base font-medium tracking-tight md:tracking-wider sm:text-sm bg-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600"
                      >
                        1 Month
                      </div>

                      {/* apply button start */}
                      <div className="flex justify-start">
                        <a
                           href={item.applylink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="w-60% py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Apply Now
                          </button>
                        </a>
                      </div>
                      <span className="text-gray-400 text-xs">
                        {" "}
                        * miscellaneous fees applied (₹100 - ₹150). no
                        hidden charges.
                      </span>
                      {/* apply button end */}

                      <p className="text-xl my-5 font-semibold">
                        Responsibilities:
                      </p>
                      <ol className="list-disc pl-5 space-y-2">
                        <li className="my-2">
                          <p>{item.res1}</p>
                        </li>
                      </ol>

                      <p className="text-xl my-5 font-semibold">
                        Qualifications:
                      </p>
                      <ol className="list-disc pl-5 space-y-2">
                        <li className="my-2">
                          <p> {item.qua1}</p>
                        </li>
                        <li className="my-2">
                          <p> {item.qua2}</p>
                        </li>
                        <li className="my-2">
                          <p> {item.qua3}</p>
                        </li>
                        <li className="my-2">
                          <p> {item.qua4}</p>
                        </li>
                      </ol>

                      <p className="text-xl my-5 font-semibold">Benefits:</p>
                      <ol className="list-disc pl-5 space-y-2">
                        <li className="my-2">
                          <p> {item.ben1}</p>
                        </li>
                        <li className="my-2">
                          <p> {item.ben2}</p>
                        </li>
                        <li className="my-2">
                          <p> {item.ben3}</p>
                        </li>
                      </ol>

                      {/* button  */}

                      <div className="flex justify-center">
                        <a
                           href={item.applylink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="w-60% py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Apply Now
                          </button>
                        </a>
                      </div>

                      <InternSocial/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollToTop>
      </div>
    </>
  );
};

export default P4Python;
