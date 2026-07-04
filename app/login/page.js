"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
const Page = () => {
  const router= useRouter();
  const {data: session} =useSession()
  useEffect(()=>{
    if(session){
      router.push("/dashboard");
    }
  },[session,router]);
  return (
    <div className="container mx-auto py-[113px]">
      <h1 className="text-white text-center font-bold text-2xl px-6 mb-6 ">
        login to Get your fans to support you
      </h1>

      <div className="flex flex-col gap-3 p-1 items-center">

        {/* Google */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" />
          Continue with Google
        </button>

        {/* LinkedIn */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" className="h-5 w-5" />
          Continue with LinkedIn
        </button>

        {/* Twitter */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" className="h-5 w-5" />
          Continue with Twitter
        </button>

        {/* Facebook */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="h-5 w-5" />
          Continue with Facebook
        </button>

        {/* GitHub */}
        <button onClick={()=>{signIn("github")}} className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="https://www.svgrepo.com/show/475654/github-color.svg" className="h-5 w-5" />
          Continue with Github
        </button>

        {/* Apple */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-60">
          <img src="apple.svg" className="h-5 w-5" />
          Continue with Apple
        </button>

      </div>
    </div>
  );
};

export default Page;
