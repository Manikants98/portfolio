'use client';
import { SessionProvider as Providers } from 'next-auth/react';

/**
 * Provider component that wraps the application with NextAuth session management
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped with session provider
 * @returns {JSX.Element} SessionProvider wrapped component
 */
export default function SessionProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <Providers>{children}</Providers>;
}
