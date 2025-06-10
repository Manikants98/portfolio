'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contributions() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f3f4f6] px-3 py-5 lg:px-[8%] lg:py-10 dark:bg-secondary dark:text-white">
      <h1 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
        Open Source Contributions
      </h1>
      <p className="mb-8 max-w-3xl text-opacity-80 dark:text-white">
        I'm passionate about open source development. Here are some of my NPM packages that I've
        created to help developers build better applications.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* create-mkx-vite */}
        <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 lg:p-6 dark:bg-[#0B0A10]">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">create-mkx-vite</p>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            <img
              src="https://img.shields.io/npm/v/create-mkx-vite?color=1C939D"
              alt="npm version"
              className="h-5"
            />
            <img
              src="https://img.shields.io/npm/dt/create-mkx-vite?color=red"
              alt="Downloads"
              className="h-5"
            />
            <img
              src="https://img.shields.io/npm/unpacked-size/create-mkx-vite"
              alt="Size"
              className="h-5"
            />
          </div>
          <p className="flex-grow text-opacity-60 dark:text-white">
            A professional React + TypeScript + Vite template with modern tooling and best practices
            built-in. Features include React Router, Tailwind CSS, Material-UI, dark/light mode,
            Formik-Yup validation, Axios setup, and organized folder structure for production-ready
            applications.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">Vite</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">React</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">Template</span>
          </div>
          <Link
            href="/contributions/create-mkx-vite"
            className="mt-2 flex items-center gap-1 font-bold text-primary hover:underline"
          >
            View Package <span>→</span>
          </Link>
        </div>

        {/* react-mkx-toolkit */}
        <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 lg:p-6 dark:bg-[#0B0A10]">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">react-mkx-toolkit</p>
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
          <p className="flex-grow text-opacity-60 dark:text-white">
            A collection of useful React custom hooks that provide efficient ways to encapsulate and
            share logic among components. Includes hooks for keyboard events, array randomization,
            geolocation, scroll tracking, notifications, online status detection, window resizing,
            and debouncing functions.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">React</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">Hooks</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">
              TypeScript
            </span>
          </div>
          <Link
            href="/contributions/react-mkx-toolkit"
            className="mt-2 flex items-center gap-1 font-bold text-primary hover:underline"
          >
            View Package <span>→</span>
          </Link>
        </div>

        {/* react-mkx-storage */}
        <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 lg:p-6 dark:bg-[#0B0A10]">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">react-mkx-storage</p>
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
          <p className="flex-grow text-opacity-60 dark:text-white">
            A lightweight storage management library for React applications that provides three
            custom hooks: useLocalStorage, useSessionStorage, and useCookieStorage. Each hook offers
            a simple API to persist and synchronize state with browser storage mechanisms.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">Storage</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">React</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">Hooks</span>
          </div>
          <Link
            href="/contributions/react-mkx-storage"
            className="mt-2 flex items-center gap-1 font-bold text-primary hover:underline"
          >
            View Package <span>→</span>
          </Link>
        </div>

        {/* react-mkx-components */}
        <div className="flex flex-col gap-4 border-b-8 border-primary bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 lg:p-6 dark:bg-[#0B0A10]">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">react-mkx-components</p>
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
          <p className="flex-grow text-opacity-60 dark:text-white">
            A collection of reusable React components designed for modern web applications. Features
            responsive, accessible, and customizable UI elements that follow best practices and can
            be easily integrated into any React project.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">
              Components
            </span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">UI</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">React</span>
          </div>
          <Link
            href="/contributions/react-mkx-components"
            className="mt-2 flex items-center gap-1 font-bold text-primary hover:underline"
          >
            View Package <span>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-primary">GitHub Contributions</h2>
        <p className="mb-6 max-w-3xl text-opacity-80 dark:text-white">
          I actively contribute to various open source projects on GitHub. Check out my profile to
          see my latest contributions.
        </p>
        <Link
          href="https://github.com/manikants98"
          target="_blank"
          className="inline-block border-2 border-primary bg-transparent p-3 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          View GitHub Profile
        </Link>
      </div>
    </div>
  );
}
