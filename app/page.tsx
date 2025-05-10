'use client';
import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import ExperienceText from './components/experience';
import SkillsSection from './components/myskills';
import ArcReactor from './shared/arc';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const redirectToGmail = () => {
    const email = 'manikants157@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank');
  };

  const handleDownload = () => {
    const fileUrl = '/manikantsharma.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'ManiKantSharma.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col bg-[#f3f4f6] dark:bg-secondary">
      <div className="flex min-h-screen w-full flex-col px-3 lg:px-[8%] dark:text-white">
        <div id="home" className="flex flex-col justify-center p-2 pt-10 lg:gap-5 lg:pt-40">
          <div className="flex flex-col-reverse items-center overflow-hidden lg:flex-row lg:pr-20">
            <div className="flex flex-col justify-center lg:gap-5">
              <p className="h-10 text-center text-xl font-bold text-primary lg:text-start lg:text-3xl">
                Hi, I'm Mani Kant Sharma
              </p>
              <p className="text-center text-2xl font-bold lg:text-start lg:text-6xl dark:text-white">
                Software Developer
              </p>
              <p className="text-center text-opacity-60 lg:w-[60%] lg:text-start dark:text-white">
                I'm from Lucknow and I have been working as a Software Developer. I have a strong
                foundation in building responsive and user-friendly web applications. Being from
                Lucknow, I bring a blend of cultural diversity and technical expertise to my work.
              </p>
            </div>
            <ArcReactor />
          </div>

          <div className="flex items-center justify-center gap-5 py-5 lg:justify-start">
            <Button
              size="large"
              className="!rounded-none !bg-primary !px-5 !capitalize !text-white"
              onClick={redirectToGmail}
            >
              Email Me
            </Button>

            <Button
              startIcon={<Download />}
              size="large"
              color="success"
              className="!rounded-none !capitalize !text-opacity-70 dark:!text-white"
              onClick={handleDownload}
            >
              Download CV
            </Button>
          </div>
          <div
            id="services"
            className="flex w-full flex-col justify-between gap-5 py-10 lg:flex-row lg:gap-3 lg:py-16"
          >
            <ExperienceText />
            <div className="flex flex-col gap-2 lg:w-96">
              <p className="text-lg font-semibold text-primary">Services</p>
              <p className="text-opacity-60 lg:w-96 dark:text-white">
                Discover the specialized services I offer, designed to elevate your projects with
                industry best practices and innovative solutions.
              </p>
            </div>
          </div>
          <SkillsSection />
        </div>
      </div>

      <div className="min-h-screen bg-white px-3 py-[4%] lg:px-[8%] dark:bg-[#313131] dark:text-white">
        <p className="py-5 font-bold text-primary">NPM Contributions</p>
        <div className="flex items-center justify-between">
          <p className="w-48 font-bold lg:w-96 lg:text-3xl">My Open Source Packages</p>
          <Link
            href="/contributions"
            className="whitespace-nowrap border-2 border-primary p-2 transition-all duration-300 hover:bg-primary"
          >
            View All Packages
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-5 shadow-lg dark:bg-[#0B0A10]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">react-mkx-toolkit</h3>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
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
            <p className="text-opacity-60 dark:text-white">
              A collection of useful React custom hooks that provide efficient ways to encapsulate
              and share logic among components. Includes hooks for keyboard events, array
              randomization, geolocation, scroll tracking, notifications, online status detection,
              window resizing, and debouncing functions. Easy to install with comprehensive browser
              support and documentation.
            </p>

            <Link
              href="/contributions/react-mkx-toolkit"
              className="flex items-center gap-1 font-bold text-primary hover:underline"
            >
              View Package <span>→</span>
            </Link>
          </div>

          <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-5 shadow-lg dark:bg-[#0B0A10]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">react-mkx-storage</h3>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
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
            <p className="text-opacity-60 dark:text-white">
              A lightweight storage management library for React applications that provides three
              custom hooks: useLocalStorage, useSessionStorage, and useCookieStorage. Each hook
              offers a simple API to persist and synchronize state with browser storage mechanisms,
              supporting various data types including strings, numbers, objects, and arrays with
              automatic serialization and type safety.
            </p>

            <Link
              href="/contributions/react-mkx-storage"
              className="flex items-center gap-1 font-bold text-primary hover:underline"
            >
              View Package <span>→</span>
            </Link>
          </div>

          <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-5 shadow-lg dark:bg-[#0B0A10]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">react-mkx-components</h3>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
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
            <p className="text-opacity-60 dark:text-white">
              A comprehensive collection of reusable React components including Input with Formik
              integration, Select dropdowns, and conditional rendering. Simplifies form handling
              with built-in error management and provides elegant UI solutions for common
              development needs. Features responsive design, accessibility compliance, and
              comprehensive TypeScript support for modern web applications.
            </p>

            <Link
              href="/contributions/react-mkx-components"
              className="flex items-center gap-1 font-bold text-primary hover:underline"
            >
              View Package <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-2 border-l-4 border-primary bg-white px-3 py-[4%] lg:flex-row lg:items-center lg:border-l-8 lg:px-[8%] dark:bg-[#0B0A10] dark:text-white">
        <div className="flex flex-col lg:gap-4">
          <p className="text-2xl font-bold lg:text-4xl">Have any project in mind?</p>
          <p className="dar:text-gray-400 w-3/4">
            Feel free to contact me or just say friendly hello!
          </p>
        </div>
        <Button
          size="large"
          className="!rounded-none !bg-primary !px-5 !capitalize !text-white"
          onClick={redirectToGmail}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
