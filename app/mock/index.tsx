import { FlutterIcon, NodeJsIcon, ReactIcon } from '@/app/resources';

export const skills = [
    {
      icon: <ReactIcon />,
      title: 'React.js',
      level: 'Expert',
      color: 'border-blue-500',
      description:
        "I build high-performance React applications with a focus on modern practices like hooks, context API, and advanced state management. My expertise includes component optimization, creating reusable UI libraries, implementing complex state logic, and ensuring accessibility compliance. I've developed enterprise-level SPAs with efficient rendering strategies and API integrations.",
    },
    {
      icon: <NodeJsIcon />,
      title: 'Node.js',
      level: 'Proficient',
      color: 'border-green-500',
      description:
        'I develop scalable backend systems using Node.js and Express. My expertise includes building RESTful APIs, implementing authentication systems (JWT, OAuth), database integration (MongoDB, PostgreSQL), and real-time applications with Socket.io. I emphasize clean architecture, security best practices, and performance optimization for production-grade applications.',
    },
    {
      icon: <FlutterIcon />, 
      title: 'Flutter',
      level: 'Intermediate',
      color: 'border-cyan-500',
      description:
        "I create cross-platform mobile applications with Flutter's widget system and Dart programming. My Flutter projects feature custom animations, responsive layouts, efficient state management (Provider, Bloc, Riverpod), and native device integration. I focus on creating pixel-perfect UIs that maintain consistent performance across iOS and Android platforms.",
    },
  ];