import React from 'react'

import whatsapp from "../../imgs/whatsapp.png";
import telegram from "../../imgs/telegram.png";
const InternSocial = () => {
  return (
    <div className="w-full flex justify-center items-center rounded-lg">
                        <section className="body-font m-auto my-4 justify-center text-gray-600">
                          <div className="container mx-auto flex flex-col items-center justify-center px-4 py-0 md:flex-row md:space-x-4">
                            <div className="mx-auto flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                              <a href="https://whatsapp.com/channel/0029VaDcEEe8aKvSkZx8At0M">
                              <button className="inline-flex items-center rounded-lg text-white px-3 py-1.5 sm:px-4 sm:py-3  border border-transparent hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
                                <span className="ml-2 flex flex-col items-start leading-none">
                                  <span className="title-font sm:text-sm text-xs font-medium text-gray-200">
                                    JOIN GROUP
                                  </span>
                                </span>
                                <img
                                  src={whatsapp}
                                  alt="WhatsApp icon"
                                  className="ml-5 h-6 w-6"
                                />
                              </button>
                              </a>
                            
                              <button className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-3 rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
                                <span className="ml-2 flex flex-col items-start leading-none">
                                  <span className="title-font sm:text-sm text-xs font-medium text-gray-200">
                                    FOLLOW US ON
                                  </span>
                                </span>
                                <img
                                  src={telegram}
                                  alt="LinkedIn icon"
                                  className="ml-5 h-6 w-6"
                                />
                              </button>
                            
                            </div>
                          </div>
                        </section>
                      </div>
  )
}

export default InternSocial