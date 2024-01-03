import Link from "next/link";
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
          <Link href='tel:+918737018483' className="text-gray-400">+918737018483</Link>
          <Link target="_blank" href='https://mail.google.com/mail/?view=cm&fs=1&to=manikants157@gmail.com' className="text-gray-400">Manikants157@gmail.com</Link>
          <Link target="_blank" href="https://www.google.com/maps?q=26.847155585279317, 80.94652420308654" className="text-gray-400">Lucknow, Uttar Prodesh,India</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Social Media</p>
          <Link target="_blank" href='https://instagram.com/manikantsharmaa/' className="text-gray-400">Instgram</Link>
          <Link target="_blank" href='https://linkedin.com/in/manikants98/' className="text-gray-400">LinkedIn</Link>
          <Link target="_blank" href='https://github.com/Manikants98' className="text-gray-400">Github</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
