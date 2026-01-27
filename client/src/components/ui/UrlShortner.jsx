import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { urlServices } from "../../api";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const handelService = async (e) => {
    e.preventDefault();



try {
  const res = await urlServices.createShort(longUrl)
  console.log(res)
} catch (error) {
  console.log(error)
  
}

  };

  return (
    <div className="max-w-4xl w-full text-center space-y-6">
      <h2 className="text-[20px] font-normal font-main text-primary bg-[#ECECEC]">
        Quick. Clean. Shareable.
      </h2>
      <h1 className="text-[72px] font-normal font-main text-main">
        Create
        <span className="font-medium bg-green rounded-[12px]">
          Shortest URLs
        </span>
      </h1>
      <p className="text-[20px] font-normal font-main text-primary">
        The world's easiest and smartest link shortener to instantly track,
        customize, and share your URLs with style.
      </p>
      <div className=""></div>
        <form
          onSubmit={handelService}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          {/* Long URL Input */}
          <Input
            placeholder={"enter your Long url..............."}
            type="text"
            required
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          {/* Shorten Button */}
          <Button
          type="submit"
            label="Shortner"
            variant="primary"
            size="md"
            icon={FaArrowRight}
          />
        </form>
      
      <p className="text-[14px] font-normal font-main text-primary">
        By clicking 'Shorten URL', you agree to Tiny's Terms of Use and Privacy
        Policy.
      </p>
    </div>
  );
};

export default UrlShortner;
