import React from "react";
import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link } from "react-router";

import { FiLink } from "react-icons/fi";
import { urlServices } from "../../api";
import Heading from "../home/Heading";
const Shortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await urlServices.createShort(longUrl);
      console.log(res);
      setShortUrl(`http:localhost:8000/${res.urlShort}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <>
      <div className="text-center mt-[100px] container">     <Heading />
      <div className="text-center flex justify-center flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ECECEC] w-[800px] border border-[#DDDDDD] rounded-md flex mt-[100px] mb-[23px]"
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
          <Button type="primary">Shortner </Button>
        </form>
        {shortUrl && (
          <div className="flex justify-center">
            <div className="bg-[#ECECEC] border w-[650px]   mb-[30px] border-[#DDDDDD] rounded-md flex justify-between pl-[30px] items-center ">
              <Link
                to={`${shortUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium truncate"
              >
                {shortUrl}
              </Link>
              <Button variant="black" onClick={handleCopy}>
                {copied ? "Copied!" : "get this link"}
              </Button>
            </div>
          </div>
        )}
      </div>
      </div>

    </>
  );
};

export default Shortner;
