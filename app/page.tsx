"use client";
import {
  ArrowBackIos,
  ArrowForwardIos,
  ArrowOutward,
  Circle,
  Download,
} from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Page() {
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
    <div className="flex flex-col dark:bg-secondary">
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
      <div className="flex flex-col dark:text-white w-full min-h-screen px-[8%]">
        <div id="home" className="flex flex-col gap-5 justify-center p-2 pt-40">
          <p className="text-3xl text-primary h-10 font-bold">
            Hi, I'm Mani Kant Sharma
          </p>
          <p className="text-7xl font-bold dark:text-white">React Developer</p>
          <p className="w-1/2 dark:text-white text-opacity-60">
            I'm from Lucknow and I have been working as a React Developer for
            more than 1 years. I have a strong foundation in building responsive
            and user-friendly web applications. Being from Lucknow, I bring a
            blend of cultural diversity and technical expertise to my work.
          </p>
          <div className="flex items-center py-5 gap-5">
            <Button
              size="large"
              className="!bg-primary !capitalize !px-5 !rounded-none !text-white"
            >
              Email Me
            </Button>
            <Button
              startIcon={<Download />}
              size="large"
              color="success"
              className="!text-opacity-70 !capitalize !rounded-none dark:!text-white"
            >
              Download CV
            </Button>
          </div>
          <div id="services" className="flex justify-between py-16">
            <p className="text-4xl font-bold w-96">
              1+ year of experience working
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-primary font-semibold text-lg">Services</p>
              <p className="w-96 dark:text-white text-opacity-60">
                Discover the best services I offer, designed to ensure the
                success of your proiect
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 pb-10 gap-16">
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131]">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-2xl font-bold whitespace-nowrap">
                Web App Development
              </p>
              <p className="text-white text-opacity-60">
                Specialize in responsive and interactive front-end development.
                With a deep understanding of HTML, CSS, and JS.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131]">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-2xl font-bold whitespace-nowrap">
                Mobile App Development
              </p>
              <p className="text-white text-opacity-60">
                I offer innovative and attention-grabbing product design
                services. From initial Ideation to implementation.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131]">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-2xl font-bold whitespace-nowrap">
                Web App Development
              </p>
              <p className="text-white text-opacity-60">
                I help design strong and captivating brand strategies. Through
                thorough research and market analysis.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131]">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-2xl font-bold whitespace-nowrap">
                ERP Development
              </p>
              <p className="text-white text-opacity-60">
                I help design strong and captivating brand strategies. Through
                thorough research and market analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="work"
        className="dark:bg-[#313131] dark:text-white min-h-screen px-[8%] py-[4%]"
      >
        <p className="text-primary font-bold py-5">Recent Work</p>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold w-96">
            Some of my favorite projects.
          </p>
          <button
            className="p-2 border-2 border-primary transition-all duration-300 hover:bg-primary"
            onClick={() => navigate.push("/project")}
          >
            View All Project
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10 py-10">
          <div className="flex flex-col gap-3">
            <div className="h-[400px] bg-black"></div>
            <p className="text-xl font-bold">
              Edu-Villa: An Online Learning App
            </p>
            <p className="cursor-pointer text-primary font-bold text-lg">
              See Project <ArrowOutward />
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[400px] bg-black"></div>
            <p className="text-xl font-bold">Crazzyhub: An Ecommerce Web App</p>
            <p className="cursor-pointer text-primary font-bold text-lg">
              See Project <ArrowOutward />
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[400px] bg-black"></div>
            <p className="text-xl font-bold">Bhaarat ERP: An ERP Web App</p>
            <p className="cursor-pointer text-primary font-bold text-lg">
              See Project <ArrowOutward />
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-[400px] bg-black"></div>
            <p className="text-xl font-bold">Real Time Chat</p>
            <p className="cursor-pointer text-primary font-bold text-lg">
              See Project <ArrowOutward />
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-secondary items-center dark:text-white p-[8%] flex justify-between">
        <IconButton>
          <ArrowBackIos className="!text-primary" />
        </IconButton>
        <div className="flex flex-col text-center gap-7 items-center w-1/2 justify-center">
          <p className="!text-primary text-xl font-bold">Testimonials</p>
          <p className="text-4xl font-bold">My happy clients</p>
          <p className="text-gray-400">
            "Wow is all i can say! Alifreza did an absolute fenominal job from
            start to finish. He created exactly what I wanted and exceeded my
            expectation. Highly recommend alifreza!"
          </p>
          <div className="flex items-center gap-3">
            <Avatar
              className="!h-12 !w-12"
              alt="M"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <div className="flex flex-col items-start justify-start">
              <p>Monalisa Nona</p>
              <p>Project Manager, Lucknow</p>
            </div>
          </div>
          <span className="flex gap-2 items-center">
            <Circle className="!text-base !text-primary" />
            <Circle className="!text-sm" />
            <Circle className="!text-sm" />
          </span>
        </div>
        <IconButton>
          <ArrowForwardIos className="!text-primary" />
        </IconButton>
      </div>
      <div className="dark:bg-[#0B0A10] border-l-8 border-primary items-center dark:text-white px-[8%] py-[4%] flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold">Have any project in mind?</p>
          <p className="text-gray-400">
            Feel free to contact me or just say friendly hello!
          </p>
        </div>
        <Button
          size="large"
          className="!bg-primary !capitalize !px-5 !rounded-none !text-white"
        >
          Contact Me
        </Button>
      </div>
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
