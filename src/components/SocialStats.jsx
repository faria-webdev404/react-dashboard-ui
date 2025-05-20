import React from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const SocialStats = () => {
  const data = [
    {
      icon: <FaFacebook size={28} />,
      likes: "12,281",
      rate: "+7.2%",
      color: "text-blue-600",
      target: "35,098",
      duration: 350,
    },
    {
      icon: <FaTwitter size={28} />,
      likes: "11,200",
      rate: "+6.2%",
      color: "text-sky-500",
      target: "34,185",
      duration: 800,
    },
    {
      icon: <FaGoogle size={28} />,
      likes: "10,500",
      rate: "+5.9%",
      color: "text-red-500",
      target: "25,998",
      duration: 900,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((stat, i) => (
        <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow w-full">
          <div className="flex justify-between items-center">
            <span className={stat.color}>{stat.icon}</span>
            <div className="text-right">
              <h4 className="font-semibold text-xl">{stat.likes}</h4>
              <p className="text-gray-700 text-sm">{stat.rate} Total Likes</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Target: {stat.target}</p>
            <div className="h-2 mt-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-teal-400 rounded-full"
                style={{ width: `${(stat.duration / 1000) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialStats;
