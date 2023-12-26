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
  const router = useRouter();

  const redirectToGmail = () => {
    const email = "manikants157@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  const handleDownload = () => {
    const fileUrl = "/Mani@resumeUpdatedSep.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "ManiKantSharma.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col dark:bg-secondary">
      <div className="flex flex-col dark:text-white w-full min-h-screen px-3 lg:px-[8%]">
        <div
          id="home"
          className="flex flex-col lg:gap-5 justify-center p-2 lg:pt-40 pt-10"
        >
          <p className="lg:text-3xl text-xl text-primary h-10 font-bold">
            Hi, I'm Mani Kant Sharma
          </p>
          <p className="lg:text-7xl text-2xl font-bold dark:text-white">
            React Developer
          </p>
          <p className="lg:w-1/2 dark:text-white text-opacity-60">
            I'm from Lucknow and I have been working as a React Developer for
            more than 1 years. I have a strong foundation in building responsive
            and user-friendly web applications. Being from Lucknow, I bring a
            blend of cultural diversity and technical expertise to my work.
          </p>
          <div className="flex items-center py-5 gap-5">
            <Button
              size="large"
              className="!bg-primary !capitalize !px-5 !rounded-none !text-white"
              onClick={redirectToGmail}
            >
              Email Me
            </Button>

            <Button
              startIcon={<Download />}
              size="large"
              color="success"
              className="!text-opacity-70 !capitalize !rounded-none dark:!text-white"
              onClick={handleDownload}
            >
              Download CV
            </Button>
          </div>
          <div
            id="services"
            className="flex lg:flex-row flex-col gap-3 justify-between py-10 lg:py-16"
          >
            <p className="lg:text-4xl text-2xl font-bold lg:w-96">
              1+ year of experience working
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-primary font-semibold text-lg">Services</p>
              <p className="lg:w-96 dark:text-white text-opacity-60">
                Discover the best services I offer, designed to ensure the
                success of your proiect
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 pb-10 lg:gap-16 gap-10">
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
        className="dark:bg-[#313131] dark:text-white min-h-screen lg:px-[8%] px-3 py-[4%]"
      >
        <p className="text-primary font-bold py-5">Recent Work</p>
        <div className="flex items-center justify-between">
          <p className="lg:text-3xl font-bold lg:w-96 w-48">
            Some of my favorite projects.
          </p>
          <button
            className="p-2 border-2 border-primary transition-all duration-300 hover:bg-primary"
            onClick={() => router.push("/project")}
          >
            View All Project
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 py-10">
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
      <div className="dark:bg-secondary items-center dark:text-white lg:p-[8%] p-3 flex lg:justify-between justify-center">
        <IconButton className="lg:block hidden">
          <ArrowBackIos className="!text-primary" />
        </IconButton>
        <div className="flex flex-col text-center gap-7 items-center lg:w-1/2 justify-center">
          <p className="!text-primary text-xl font-bold">Testimonials</p>
          <p className="lg:text-4xl text-2xl font-bold">My happy clients</p>
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
            <Circle className="lg:!text-base !text-sm !text-primary" />
            <Circle className="lg:!text-sm !text-xs" />
            <Circle className="lg:!text-sm !text-xs" />
          </span>
        </div>
        <IconButton className="lg:block hidden">
          <ArrowForwardIos className="!text-primary" />
        </IconButton>
      </div>
      <div className="dark:bg-[#0B0A10] lg:border-l-8 border-l-4 border-primary lg:items-center dark:text-white lg:px-[8%] px-3 py-[4%] flex lg:flex-row flex-col gap-2 justify-between">
        <div className="flex flex-col lg:gap-4">
          <p className="lg:text-4xl text-2xl font-bold">
            Have any project in mind?
          </p>
          <p className="text-gray-400 w-3/4">
            Feel free to contact me or just say friendly hello!
          </p>
        </div>
        <Button
          size="large"
          className="!bg-primary !capitalize !px-5 !rounded-none !text-white"
          onClick={redirectToGmail}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
