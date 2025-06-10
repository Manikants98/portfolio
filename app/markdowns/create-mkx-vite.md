# React Standard Template for Vite

<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding:10px 0px; flex-wrap: wrap;" >
  <img src="https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue" alt="Author" />
  <img src="https://img.shields.io/npm/v/create-mkx-vite?color=1C939D" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/create-mkx-vite" alt="npm downloads" />
  <img src="https://img.shields.io/npm/l/create-mkx-vite" alt="license" />
  <img src="https://img.shields.io/npm/unpacked-size/create-mkx-vite" alt="size" />
</div>

## Description

A professional React + TypeScript + Vite template with modern tooling and best practices built-in. Get started with a production-ready setup in seconds.

## 🚀 Quick Start

```bash
npx create-mkx-vite my-awesome-app
cd my-awesome-app
npm run dev
```

## ✨ Features

This template comes with everything you need for modern React development:

### 🏗️ **Core Stack**

- **React 18** with TypeScript support
- **Vite** for lightning-fast development
- **React Router** for client-side routing
- **Tailwind CSS** for utility-first styling

### 🎨 **UI & Styling**

- **Material-UI (MUI)** components and icons
- **Dark/Light mode** toggle built-in
- Responsive design patterns
- Custom component library structure

### 🔧 **Developer Experience**

- **ESLint & Prettier** for code quality
- **TypeScript** with strict configuration
- **Hot Module Replacement (HMR)**
- Organized folder structure

### 📦 **State & Data Management**

- **Axios** configured for API calls
- **Formik + Yup** for form handling and validation
- Custom hooks for common patterns
- Mock data setup for development

### 🛠️ **Additional Tools**

- Authentication components (SignIn/SignUp)
- Error boundaries and 404 handling
- Service layer architecture
- Reusable schemas and configurations

## 📁 Project Structure

```
my-awesome-app/
├── public/
│   └── vite.svg
├── src/
│   ├── Authentication/          # Auth components
│   │   ├── SignIn/
│   │   └── SignUp/
│   ├── Components/              # Reusable UI components
│   │   ├── Common/
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── Home/
│   ├── Pages/                   # Route components
│   │   ├── Home/
│   │   ├── AboutUs/
│   │   └── ContactUs/
│   ├── Services/                # API service layer
│   │   ├── Home/
│   │   ├── AboutUs/
│   │   └── ContactUs/
│   ├── Configs/                 # App configuration
│   │   ├── axios.ts
│   │   └── urls.ts
│   ├── Schemas/                 # Validation schemas
│   ├── Routes/                  # Route definitions
│   ├── Layout/                  # Layout components
│   ├── Mock/                    # Mock data
│   ├── Resources/               # Static assets
│   └── NotFound/                # 404 component
├── index.html
├── .eslintrc.cjs
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🔨 Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run type checking
npm run type-check
```

### Development Server

```bash
npm run dev
```

Starts the development server at `http://localhost:5173` with:

- Hot Module Replacement (HMR)
- TypeScript error reporting
- ESLint integration
- Fast refresh for React components

### Production Build

```bash
npm run build
```

Creates an optimized production build with:

- Code splitting and tree shaking
- Asset optimization and compression
- TypeScript compilation
- Source maps for debugging

## 🎯 Best Practices Included

- **Component Organization**: Clear separation between pages, components, and services
- **Type Safety**: Full TypeScript integration with strict configuration
- **Code Quality**: ESLint and Prettier configurations
- **Performance**: Lazy loading and code splitting ready
- **Accessibility**: Semantic HTML and ARIA attributes
- **SEO Ready**: Meta tags and structured data support

## 📚 Documentation & Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Material-UI](https://mui.com/)

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/manikants98/create-mkx-vite/issues) page
2. Create a new issue with detailed information
3. Use the appropriate issue template

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
