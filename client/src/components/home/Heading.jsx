import React from "react";

const Heading = () => {
  return (
    <>
      <div className=" flex justify-center" >
        <h2 className="w-[300px] text-[20px] text-center font-normal font-main text-primary bg-[#ECECEC] py-[7px] rounded-[12px]">
          Quick. Clean. Shareable.
        </h2>
      </div>
      <h1 className="text-[72px] font-normal font-main text-main mt-[30px] mb-[31px]">
        Create
        <span className="font-medium bg-green rounded-[12px]">
          Shortest URLs
        </span>
      </h1>
      <p className="w-[806px] text-center text-[20px] font-normal font-main text-primary">
        The world's easiest and smartest link shortener to instantly track,
        customize, and share your URLs with style.
      </p>
    </>
  );
};

export default Heading;
