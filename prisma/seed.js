import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.blog.deleteMany({});
  await prisma.skill.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.contribution.deleteMany({});

  console.log('Seeding database...');

  const blogs = [
    {
      title: 'Getting Started with React',
      category: 'Frontend',
      content:
        'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      status: 'PUBLISHED',
      views: 1250,
    },
    {
      title: 'Node.js Best Practices',
      category: 'Backend',
      content:
        'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Here are some best practices for building Node.js applications.',
      status: 'PUBLISHED',
      views: 980,
    },
    {
      title: 'Introduction to TypeScript',
      category: 'Frontend',
      content:
        'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
      status: 'DRAFT',
      views: 0,
    },
    {
      title: 'Building RESTful APIs',
      category: 'Backend',
      content:
        'REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.',
      status: 'PUBLISHED',
      views: 1560,
    },
    {
      title: 'CSS Grid Layout Tutorial',
      category: 'Frontend',
      content:
        'CSS Grid Layout is a two-dimensional grid-based layout system designed for the web. It gives you the ability to place items at any position within the grid.',
      status: 'PUBLISHED',
      views: 2100,
    },
    {
      title: 'MongoDB vs PostgreSQL',
      category: 'Database',
      content:
        'MongoDB is a document database, while PostgreSQL is a relational database. Each has its own strengths and weaknesses, and the choice between them depends on your specific requirements.',
      status: 'DRAFT',
      views: 0,
    },
    {
      title: 'Next.js Performance Optimization',
      category: 'Backend',
      content:
        'Next.js is a React framework that enables server-side rendering and static site generation. Here are some tips for optimizing the performance of your Next.js applications.',
      status: 'PUBLISHED',
      views: 1800,
    },
    {
      title: 'React Hooks Tutorial',
      category: 'Frontend',
      content:
        'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.',
      status: 'PUBLISHED',
      views: 2200,
    },
  ];

  const skills = [
    {
      title: 'React.js',
      category: 'Frontend',
      description:
        "I build high-performance React applications with a focus on modern practices like hooks, context API, and advanced state management. My expertise includes component optimization, creating reusable UI libraries, implementing complex state logic, and ensuring accessibility compliance. I've developed enterprise-level SPAs with efficient rendering strategies and API integrations.",
      level: 'Expert',
      status: 'PUBLISHED',
    },
    {
      title: 'Node.js',
      category: 'Backend',
      description:
        'I develop scalable backend systems using Node.js and Express. My expertise includes building RESTful APIs, implementing authentication systems (JWT, OAuth), database integration (MongoDB, PostgreSQL), and real-time applications with Socket.io. I emphasize clean architecture, security best practices, and performance optimization for production-grade applications.',
      level: 'Proficient',
      status: 'PUBLISHED',
    },
    {
      title: 'TypeScript',
      category: 'Frontend',
      description:
        'TypeScript is a superset of JavaScript that compiles to clean JavaScript output. I use TypeScript to build robust and maintainable applications with strong type safety and better developer experience.',
      level: 'Proficient',
      status: 'PUBLISHED',
    },
    {
      title: 'Flutter',
      category: 'Mobile',
      description:
        "I create cross-platform mobile applications with Flutter's widget system and Dart programming. My Flutter projects feature custom animations, responsive layouts, efficient state management (Provider, Bloc, Riverpod), and native device integration. I focus on creating pixel-perfect UIs that maintain consistent performance across iOS and Android platforms.",
      level: 'Intermediate',
      status: 'PUBLISHED',
    },
    {
      title: 'Next.js',
      category: 'Frontend',
      description:
        'Next.js is a React framework for building server-side rendered applications. I leverage its features for optimal performance, SEO, and developer experience.',
      level: 'Proficient',
      status: 'PUBLISHED',
    },
    {
      title: 'Tailwind CSS',
      category: 'Frontend',
      description:
        'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. I use it to create responsive and modern user interfaces with minimal custom CSS.',
      level: 'Proficient',
      status: 'PUBLISHED',
    },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      category: 'Personal',
      description:
        'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include dark mode, responsive design, and a blog system.',
      status: 'PUBLISHED',
    },
    {
      title: 'E-Learning Platform',
      category: 'Education',
      description:
        'An online learning platform with features like course management, video streaming, and student progress tracking. Built with React, Node.js, and MongoDB.',
      status: 'PUBLISHED',
    },
    {
      title: 'E-Commerce Store',
      category: 'E-Commerce',
      description:
        'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with Next.js, Node.js, and PostgreSQL.',
      status: 'PUBLISHED',
    },
    {
      title: 'Task Management App',
      category: 'Productivity',
      description:
        'A collaborative task management application with real-time updates, team features, and progress tracking. Built with React, Node.js, and Socket.io.',
      status: 'DRAFT',
    },
    {
      title: 'Social Media Dashboard',
      category: 'Analytics',
      description:
        'A comprehensive social media analytics dashboard with data visualization, reporting, and scheduling features. Built with React, Node.js, and Chart.js.',
      status: 'PUBLISHED',
    },
    {
      title: 'Weather App',
      category: 'Utility',
      description:
        'A weather application with location-based forecasts, historical data, and interactive maps. Built with React Native and OpenWeather API.',
      status: 'DRAFT',
    },
  ];

  const contributions = [
    {
      title: 'React Custom Hooks Library',
      description:
        'A collection of useful React custom hooks that provide efficient ways to encapsulate and share logic among components. Includes hooks for keyboard events, array randomization, geolocation, scroll tracking, notifications, online status detection, window resizing, and debouncing functions.',
    },
    {
      title: 'Storage Management Library',
      description:
        'A lightweight storage management library for React applications that provides three custom hooks: useLocalStorage, useSessionStorage, and useCookieStorage. Each hook offers a simple API to persist and synchronize state with browser storage mechanisms.',
    },
    {
      title: 'React Component Library',
      description:
        'A collection of reusable React components designed for modern web applications. Features responsive, accessible, and customizable UI elements that follow best practices and can be easily integrated into any React project.',
    },
    {
      title: 'Vite Template',
      description:
        'A professional React + TypeScript + Vite template with modern tooling and best practices built-in. Features include React Router, Tailwind CSS, Material-UI, dark/light mode, Formik-Yup validation, Axios setup, and organized folder structure for production-ready applications.',
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.create({
      data: blog,
    });
  }

  for (const skill of skills) {
    await prisma.skill.create({
      data: skill,
    });
  }

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  for (const contribution of contributions) {
    await prisma.contribution.create({
      data: contribution,
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
