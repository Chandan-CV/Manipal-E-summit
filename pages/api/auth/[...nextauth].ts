import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
        // @ts-ignore
      clientId: process.env.GOOGLE_ID,
        // @ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks:{
    session({ session, token, user }) {
        return session // The return type will match the one returned in `useSession()`
      },
  }
};
export default NextAuth(authOptions);
