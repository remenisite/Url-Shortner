import React from "react";

const Steps = () => {
  const steps = [
    {
      title: "1. Submit URL",
      desc: "User submits a long URL using the form.",
    },
    {
      title: "2. Generate Code",
      desc: "System creates a unique short code for the URL.",
    },
    {
      title: "3. Store Securely",
      desc: "Long URL and short code are saved in the database.",
    },
    {
      title: "4. Redirect",
      desc: "Visiting the short URL redirects to the original link.",
    },
  ];

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How Does a Short URL Work?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Steps;
