import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from '@/models/User';
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB()
        const currentUSer =await User.findOne({ email: user.email });
        if (!currentUSer) {
          const newUser = new User({
            email:user.email,
            username:user.email.split("@")[0],
          })
          await newUser.save()
        }
        return true;
      }
    },
    async session({session,user,token}){
      const dbUser=await User.findOne({email:session.user.email})
      session.user.name=dbUser.username
      return session
    },
  }
})

export { handler as GET, handler as POST }
