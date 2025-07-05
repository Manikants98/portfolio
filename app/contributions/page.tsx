'use client';
import Link from 'next/link';

export default function Contributions() {
  const packages = [
    {
      name: 'react-mkx-toolkit',
      description:
        'A collection of useful React custom hooks that provide efficient ways to encapsulate and share logic among components. Includes hooks for keyboard events, array randomization, geolocation, scroll tracking, notifications, online status detection, window resizing, and debouncing functions.',
    },
    {
      name: 'react-mkx-storage',
      description:
        'A lightweight storage management library for React applications that provides three custom hooks: useLocalStorage, useSessionStorage, and useCookieStorage. Each hook offers a simple API to persist and synchronize state with browser storage mechanisms.',
    },
    {
      name: 'react-mkx-components',
      description:
        'A collection of reusable React components designed for modern web applications. Features responsive, accessible, and customizable UI elements that follow best practices and can be easily integrated into any React project.',
    },
    {
      name: 'create-mkx-vite',
      description:
        'A professional React + TypeScript + Vite template with modern tooling and best practices built-in. Features include React Router, Tailwind CSS, Material-UI, dark/light mode, Formik-Yup validation, Axios setup, and organized folder structure for production-ready applications.',
    },
  ];

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
        {packages.map(pkg => (
          <div
            key={pkg.name}
            className="flex flex-col gap-4 border-b-8 border-primary bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 lg:p-6 dark:bg-[#0B0A10]"
          >
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-primary">{pkg.name}</p>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              <img
                src={`https://img.shields.io/npm/v/${pkg.name}?color=1C939D`}
                alt="npm version"
                className="h-5"
              />
              <img
                src={`https://img.shields.io/npm/dt/${pkg.name}?color=red`}
                alt="Downloads"
                className="h-5"
              />
              <img
                src={`https://img.shields.io/npm/unpacked-size/${pkg.name}`}
                alt="Size"
                className="h-5"
              />
            </div>
            <p className="flex-grow text-opacity-60 dark:text-white">{pkg.description}</p>

            <Link
              href={`/contributions/${pkg.name}`}
              className="mt-2 flex items-center gap-1 font-bold text-primary hover:underline"
            >
              View Package <span>→</span>
            </Link>
          </div>
        ))}
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
