'use client'
import { useRouter } from "next/navigation";
import React from "react";
import Menu from "../menu";
import Link from "next/link";

const Header = () => {
  const navigate = useRouter();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id) as Element;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex sticky top-0 justify-between dark:text-white items-center z-30 dark:bg-secondary dark:bg-opacity-40 backdrop-blur px-3 lg:px-[8%] py-3">
      <p
        className="text-3xl lg:cursor-pointer font-bold"
        onClick={() => navigate.push("/")}
      >
        ManiKantSharma<span className="text-primary">.</span>
      </p>
      <Menu />
      <div className="lg:flex hidden items-center gap-4">
        <button
          className="hover:text-primary transition-all duration-300"
          onClick={() => navigate.push("/")}
        >
          Home
        </button>
        <button
          className="hover:text-primary transition-all duration-300"
          onClick={() => handleScroll("services")}
        >
          Services
        </button>
        <button
          className="hover:text-primary transition-all duration-300"
          onClick={() => handleScroll("work")}
        >
          Work
        </button>
        <button
          className="hover:text-primary transition-all duration-300"
          onClick={() => handleScroll("aboutus")}
        >
          About Us
        </button>

        <Link target="_blank" className="group hover:bg-primary mx-3 relative bg-primary rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2" href='https://www.linkedin.com/in/manikants98/'>
          <svg
            className="w-8 h-8 fill-neutral-50"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width="100"
            x="0"
            xmlns="http://www.w3.org/2000/svg"
            y="0"
          >
            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
          </svg>
          <span className="border-l-2 px-1">Mani Kant Sharma</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
