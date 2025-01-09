"use client";
import { ArrowOutward, Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArcReactor from "./shared/arc";
import { projects } from "./mock";

export default function Page() {
  const router = useRouter();
  const redirectToGmail = () => {
    const email = "manikants157@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  const handleDownload = () => {
    const fileUrl = "/manikantsharma.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "ManiKantSharma.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col bg-[#f3f4f6] dark:bg-secondary">
      <div className="flex flex-col dark:text-white w-full min-h-screen px-3 lg:px-[8%]">
        <div
          id="home"
          className="flex flex-col lg:gap-5 justify-center p-2 lg:pt-40 pt-10"
        >
          <div className="flex flex-col-reverse items-center lg:flex-row overflow-hidden lg:pr-20">
            <div className="flex lg:gap-5 flex-col justify-center">
              <p className="lg:text-3xl lg:text-start text-center text-xl text-primary h-10 font-bold">
                Hi, I'm Mani Kant Sharma
              </p>
              <p className="lg:text-6xl lg:text-start text-center text-2xl font-bold dark:text-white">
                Software Developer
              </p>
              <p className="lg:w-1/2 lg:text-start text-center dark:text-white text-opacity-60">
                I'm from Lucknow and I have been working as a Software Developer
                for more than 1.5+ years. I have a strong foundation in building
                responsive and user-friendly web applications. Being from
                Lucknow, I bring a blend of cultural diversity and technical
                expertise to my work.
              </p>
            </div>
            <ArcReactor />
          </div>

          <div className="flex items-center lg:justify-start justify-center py-5 gap-5">
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
              2+ years of experience working
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-primary font-semibold text-lg">Services</p>
              <p className="lg:w-96 dark:text-white text-opacity-60">
                Discover the best services I offer, designed to ensure the
                success of your proiect
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 pb-10 gap-5">
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                ReactJs | Expert
              </p>
              <p className="dark:text-white text-opacity-60">
                ReactJs is a powerful JavaScript library for building user
                interfaces. With ReactJs, I specialize in creating dynamic and
                interactive web applications. From crafting intuitive user
                experiences to optimizing performance, I bring your ideas to
                life with precision and creativity.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                React Native | Medium
              </p>
              <p className="dark:text-white text-opacity-60">
                React Native is a framework for building native applications
                using React. With React Native, I specialize in developing
                cross-platform mobile applications with a single codebase. From
                seamless user experiences to high-performance apps, I deliver
                engaging mobile solutions tailored to your needs.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                Flutter | Medium
              </p>
              <p className="dark:text-white text-opacity-60">
                Flutter is Google's UI toolkit for building natively compiled
                applications for mobile, web, and desktop from a single
                codebase. With Flutter, I specialize in creating beautiful and
                responsive cross-platform apps. From pixel-perfect designs to
                smooth animations, I provide innovative solutions for your
                digital needs.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                NodeJs | Medium
              </p>
              <p className="dark:text-white text-opacity-60">
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
                engine. With Node.js, I specialize in building scalable and
                efficient server-side applications. From RESTful APIs to
                real-time web applications, I leverage the power of Node.js to
                create robust backends that drive your digital initiatives
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        id="work"
        className="dark:bg-[#313131] dark:text-white min-h-screen lg:px-[8%] px-3 py-[4%] bg-white"
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
          {projects?.map(({ imageSrc, title,slug }) => {
            return (
              <div key={slug} className="flex flex-col gap-3">
                <Image
                  height={600}
                  width={800}
                  src={imageSrc}
                  alt=""
                  className="rounded border dark:border-gray-600"
                />

                <p className="text-xl font-bold">{title}</p>
                <p
                  className="cursor-pointer text-primary font-bold text-lg"
                  onClick={() => router.push(`/project/${slug}`)}
                >
                  See Project <ArrowOutward />
                </p>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="dark:bg-[#0B0A10] bg-white lg:border-l-8 border-l-4 border-primary lg:items-center dark:text-white lg:px-[8%] px-3 py-[4%] flex lg:flex-row flex-col gap-2 justify-between">
        <div className="flex flex-col lg:gap-4">
          <p className="lg:text-4xl text-2xl font-bold">
            Have any project in mind?
          </p>
          <p className="dar:text-gray-400 w-3/4">
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
