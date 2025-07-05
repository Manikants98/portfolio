import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

/**
 * Represents a user in the authentication system
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user
 * @property {string} email - The email address of the user
 * @property {string|null} name - The name of the user (optional)
 * @property {Role} role - The role of the user in the system
 */
type User = {
  id: string;
  email: string;
  name: string | null;
  role: Role;
};

/**
 * NextAuth configuration options for authentication
 * @type {NextAuthOptions}
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      /**
       * Authorizes a user based on their credentials
       * @param {Object} credentials - The user's login credentials
       * @param {string} credentials.email - The user's email
       * @param {string} credentials.password - The user's password
       * @returns {Promise<User>} The authenticated user object
       * @throws {Error} If credentials are invalid or user not found
       */
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.password) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        } as User;
      },
    }),
  ],
  pages: { signIn: '/' },
  debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt' },
  callbacks: {
    /**
     * JWT callback to add user role to the token
     * @param {Object} params - The callback parameters
     * @param {Object} params.token - The JWT token
     * @param {User} params.user - The user object
     * @returns {Promise<Object>} The modified token
     */
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role;
      }
      return token;
    },
    /**
     * Session callback to add user role to the session
     * @param {Object} params - The callback parameters
     * @param {Object} params.session - The session object
     * @param {Object} params.token - The JWT token
     * @returns {Promise<Object>} The modified session
     */
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
