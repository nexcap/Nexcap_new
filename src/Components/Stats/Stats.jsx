import React from "react";

const Stats = () => {
  const stats = [
   
    {
      data: "98.97%",
      title: "Happy Customers",
    },
    {
      data: "99.98%",
      title: "Uptime",
    },
    {
      data: "99.99%",
      title: "Security",
    },
  ];

  return (
    <div>
      <section className="">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-300 md:px-8">
      
          <div className="">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-4xl font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium text-amber-100">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


    

    </div>
  );
};

export default Stats;
