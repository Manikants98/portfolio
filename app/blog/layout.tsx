"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useRouter();
  const handleScroll = (id: string, nav: string) => {
    const element = document.getElementById(id) as Element;
    navigate.push(nav);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex flex-col dark:bg-secondary min-h-screen">
      <div className="flex sticky top-0 justify-between dark:text-white items-start z-50 dark:bg-secondary dark:bg-opacity-40 backdrop-blur px-[8%] py-3">
        <p className="text-3xl font-bold">
          ManiKantSharma<span className="text-primary">.</span>
        </p>
        <div className="flex items-center gap-4">
          <button
            className="hover:text-primary transition-all duration-300"
            onClick={() => handleScroll("home", "/")}
          >
            Home
          </button>
          <button
            className="hover:text-primary transition-all duration-300"
            onClick={() => handleScroll("services", "/")}
          >
            Services
          </button>
          <button
            className="hover:text-primary transition-all duration-300"
            onClick={() => handleScroll("work", "/")}
          >
            Work
          </button>
          <button
            className="hover:text-primary transition-all duration-300"
            onClick={() => handleScroll("aboutus", "/")}
          >
            About Us
          </button>
          <button
            className="hover:text-primary transition-all duration-300"
            onClick={() => navigate.push("/blog")}
          >
            Blog
          </button>
          <button className="group hover:bg-primary mx-3 relative bg-primary rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
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
          </button>
        </div>
      </div>
      <div className="min-h-[60vh]">{children}</div>
      <div
        id="aboutus"
        className="dark:bg-black items-start dark:text-white px-[8%] py-[4%] flex"
      >
        <p className="text-3xl w-1/2 font-bold">
          ManiKantSharma<span className="text-primary">.</span>
        </p>
        <div className="grid grid-cols-2 w-1/2 gap-5">
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
    </div>
  );
}
