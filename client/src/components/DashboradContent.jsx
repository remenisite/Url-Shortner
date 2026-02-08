import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import Button from "./ui/Button";
import { useEffect } from "react";
import { urlServices } from "../api";


  const urls = [
    {
      short: "https://sho.rt/a1b2",
      original: "https://www.example.com/some/very/long/url",
      visits: 5,
      history: [
        { date: "2025-01-20 10:30", ip: "192.168.1.1" },
        { date: "2025-01-21 12:10", ip: "192.168.1.2" },
      ],
    },
    {
      short: "https://sho.rt/x9g8",
      original: "https://openai.com/research",
      visits: 3,
      history: [
        { date: "2025-01-22 09:15", ip: "192.168.1.3" },
        { date: "2025-01-23 14:40", ip: "192.168.1.4" },
      ],
    },
  ];


const DashboardContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const res = await urlServices.getAll();
         console.log(res)
      } catch (error) {
        console.log(error);
      
      }
    })();
  }, []);
  
  return (
    <div className="container mt-[200px] bg-gray-200 p-[20px]">
      <h1 className="text-2xl font-bold font-main text-main flex items-center gap-2">
        <FaLink /> URL Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-50 text-[16px] font-normal font-main text-main text-left">
              <th className="py-3 px-4 border-b">Short URL</th>
              <th className="py-3 px-4 border-b">Original URL</th>
              <th className="py-3 px-4 border-b">Visits</th>
              <th className="py-3 px-4 border-b">History</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-blue-600">
                  <a href={url.short} target="_blank" rel="noopener noreferrer">
                    {url.short}
                  </a>
                </td>
                <td className="py-2 px-4 border-b text-gray-700 truncate max-w-xs">
                  {url.original}
                </td>
                <td className="py-2 px-4 border-b">{url.visits}</td>
                <td className="py-2 px-4 border-b">
                  <Button
                    type="primary"
                    onClick={() => {
                      setSelectedUrl(url);
                      setShowModal(true);
                    }}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
            <h2 className="text-xl font-bold mb-4">Visit History</h2>
            <p className="text-sm text-gray-600 mb-2">{selectedUrl.short}</p>
            <table className="w-full border border-gray-200 rounded">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="py-2 px-3 border-b">Date</th>
                  <th className="py-2 px-3 border-b">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {selectedUrl.history.map((h, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-2 px-3 border-b">{h.date}</td>
                    <td className="py-2 px-3 border-b">{h.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <Button
                type="secondary"
                onClick={() => {
                  setShowModal(false);
                  setSelectedUrl(null);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
