import NextAuth from "next-auth";
import { ConnectDB } from "./lib/mongodb";
import GitHub from "next-auth/providers/github";
import { User } from "@/models/User";

// Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await ConnectDB();

      const exists = await User.findOne({ email: user.email });
      if (!exists) {
        await User.create({
          email: user.email,
          name: user.name,
          image: user.image,
        });
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
