import React from "react";

const Footer = () => {
  return (
    <div
      id="aboutus"
      className="dark:bg-black items-start dark:text-white lg:px-[8%] px-3 py-[4%] flex lg:flex-row gap-3 flex-col"
    >
      <p className="text-3xl lg:w-1/2 font-bold">
        ManiKantSharma<span className="text-primary">.</span>
      </p>
      <div className="lg:grid flex justify-between grid-cols-2 lg:w-1/2 gap-5">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Information</p>
          <p className="text-gray-400">+918737018483</p>
          <p className="text-gray-400">Manikants157@gmail.com</p>
          <p className="text-gray-400">Lucknow, Uttar Prodesh,India</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Social Media</p>
          <p className="text-gray-400">Instgram</p>
          <p className="text-gray-400">LinkedIn</p>
          <p className="text-gray-400">Github</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
