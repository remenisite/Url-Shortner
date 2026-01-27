import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router";
import { urlServices } from "../../api";

const PassApi = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
    const [copied, setCopied] = useState(false);

  const handelService = async (e) => {
    e.preventDefault();

    try {
      const res = await urlServices.createShort(longUrl);
      console.log(res);
      setShortUrl(`http:localhost:8000/${res.urlShort}`);
    } catch (error) {
      console.log(error);
    }
  };

    const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <form
        onSubmit={handelService}
        className="bg-[#ECECEC] border border-[#DDDDDD] rounded-full flex mt-[100px] mb-[23px]"
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
          label="Shorten URL  "
          variant="primary"
          size="md"
          icon={FaArrowRight}
        />
      </form>
      {shortUrl && (
        <div className="flex justify-center">
            <div className="bg-[#ECECEC] border w-[650px]   mb-[30px] border-[#DDDDDD] rounded-full flex justify-between pl-[30px] items-center ">  
          <Link
            to={`${shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium truncate"
            >
            {shortUrl}
          </Link>
            <Button variant="black" label="get your link" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </Button>
              </div>
        </div>
      )}
    </>
  );
};

export default PassApi;
