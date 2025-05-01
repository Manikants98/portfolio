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
                for more than 2+ years. I have a strong foundation in building
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
          <div className="grid lg:grid-cols-3 pb-10 gap-5">
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                ReactJs | Expert
              </p>
              <p className="dark:text-white text-opacity-60">
                As a ReactJs expert, I build high-performance, responsive web
                applications with clean, maintainable code. I specialize in
                component architecture, state management with Redux/Context API,
                and optimizing application performance. My experience includes
                developing complex SPAs, implementing custom hooks, and
                integrating third-party APIs.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                Flutter | Intermediate
              </p>
              <p className="dark:text-white text-opacity-60">
                With Flutter, I create beautiful, natively compiled applications
                from a single codebase. I work with widgets to build custom
                interfaces, implement state management solutions, and integrate
                platform-specific features. My Flutter projects feature smooth
                animations, responsive layouts, and efficient data handling for
                optimal user experiences across mobile platforms.
              </p>
            </div>
            <div className="flex justify-center p-6 flex-col gap-5 border-b-8 border-primary shadow-lg dark:bg-[#313131] bg-white">
              <Image alt="" src={"/code.svg"} height={350} width={350} />
              <p className="text-lg font-bold whitespace-nowrap">
                NodeJs | Proficient
              </p>
              <p className="dark:text-white text-opacity-60">
                I develop robust backend systems with Node.js, creating RESTful
                APIs, microservices, and real-time applications. My expertise
                includes Express.js framework, database integration (MongoDB,
                MySQL), authentication systems, and API development. I focus on
                building scalable, secure, and efficient server-side solutions
                that power modern web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-[#313131] dark:text-white min-h-screen lg:px-[8%] px-3 py-[4%] bg-white">
        <p className="text-primary font-bold py-5">NPM Contributions</p>
        <div className="flex items-center justify-between">
          <p className="lg:text-3xl font-bold lg:w-96 w-48">
            My Open Source Packages
          </p>
          <a
            href="https://www.npmjs.com/~manikantsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-primary transition-all duration-300 hover:bg-primary"
          >
            View All Packages
          </a>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-10">
          <div className="flex flex-col p-5 gap-4 border-b-8 border-primary shadow-lg dark:bg-[#0B0A10] bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">react-mkx-toolkit</h3>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <img
                src="https://img.shields.io/npm/v/react-mkx-toolkit?color=1C939D"
                alt="npm version"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/dt/react-mkx-toolkit?color=red"
                alt="Downloads"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/unpacked-size/react-mkx-toolkit"
                alt="Size"
                className="h-5"
              />
            </div>
            <p className="dark:text-white text-opacity-60">
              A collection of useful React custom hooks that provide efficient
              ways to encapsulate and share logic among components. Includes
              hooks for keyboard events, array randomization, geolocation,
              scroll tracking, notifications, online status detection, window
              resizing, and debouncing functions. Easy to install with
              comprehensive browser support and documentation.
            </p>

            <a
              href="https://www.npmjs.com/package/react-mkx-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-1 hover:underline"
            >
              View Package <span>→</span>
            </a>
          </div>

          <div className="flex flex-col p-5 gap-4 border-b-8 border-primary shadow-lg dark:bg-[#0B0A10] bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">react-mkx-storage</h3>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <img
                src="https://img.shields.io/npm/v/react-mkx-storage?color=1C939D"
                alt="npm version"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/dt/react-mkx-storage?color=red"
                alt="Downloads"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/unpacked-size/react-mkx-storage"
                alt="Size"
                className="h-5"
              />
            </div>
            <p className="dark:text-white text-opacity-60">
              A lightweight storage management library for React applications
              that provides three custom hooks: useLocalStorage,
              useSessionStorage, and useCookieStorage. Each hook offers a simple
              API to persist and synchronize state with browser storage
              mechanisms, supporting various data types including strings,
              numbers, objects, and arrays with automatic serialization and type
              safety.
            </p>

            <a
              href="https://www.npmjs.com/package/react-mkx-storage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-1 hover:underline"
            >
              View Package <span>→</span>
            </a>
          </div>

          <div className="flex flex-col p-5 gap-4 border-b-8 border-primary shadow-lg dark:bg-[#0B0A10] bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">react-mkx-components</h3>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <img
                src="https://img.shields.io/npm/v/react-mkx-components?color=1C939D"
                alt="npm version"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/dt/react-mkx-components?color=red"
                alt="Downloads"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/unpacked-size/react-mkx-components"
                alt="Size"
                className="h-5"
              />
            </div>
            <p className="dark:text-white text-opacity-60">
              A comprehensive collection of reusable React components including
              Input with Formik integration, Select dropdowns, and conditional
              rendering. Simplifies form handling with built-in error management
              and provides elegant UI solutions for common development needs.
              Features responsive design, accessibility compliance, and
              comprehensive TypeScript support for modern web applications.
            </p>

            <a
              href="https://www.npmjs.com/package/react-mkx-components"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-1 hover:underline"
            >
              View Package <span>→</span>
            </a>
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
