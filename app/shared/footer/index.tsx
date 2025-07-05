import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col items-start gap-3 px-3 py-[4%] lg:flex-row lg:px-[8%] dark:bg-black dark:text-white"
    >
      <p className="text-2xl font-bold lg:w-1/2 lg:cursor-pointer lg:text-3xl">
        <span className="text-primary">&lt;</span>ManiKantSharma
        <span className="text-primary"> /&gt;</span>
      </p>
      <div className="flex grid-cols-2 justify-between gap-5 lg:grid lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Information</p>
          <Link href="tel:+918737018483" className="dark:text-gray-400">
            +918737018483
          </Link>
          <Link
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manikants157@gmail.com"
            className="dark:text-gray-400"
          >
            Manikants157@gmail.com
          </Link>
          <Link
            target="_blank"
            href="https://www.google.com/maps?q=26.847155585279317, 80.94652420308654"
            className="dark:text-gray-400"
          >
            Lucknow, Uttar Prodesh,India
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold">Social Media</p>
          <Link
            target="_blank"
            href="https://instagram.com/manikantsharmaa/"
            className="dark:text-gray-400"
          >
            Instgram
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/manikants98/"
            className="dark:text-gray-400"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Manikants98"
            className="dark:text-gray-400"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
