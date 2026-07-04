"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import Link from 'next/link'
const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className='bg-gray-900 text-white flex flex-col justify-center'>
      <div className="flex items-center justify-between px-4 md:px-8 md:h-15 h-14">

        <Link href={"/"}> <h1 className='md:text-xl text-[19px] font-bold'>Tea🍵Pay</h1></Link>

        <div className="flex gap-3.5 relative">
          {session && <>
            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={() => setshowdropdown(!showdropdown)} onBlur={()=> { setTimeout(()=> {setshowdropdown(false)},100); }} className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong bg-blue-700 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-lg " type="button">
              Welcome: {session.user.email}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </button>


            <div id="dropdownHover" className={`z-10 ${showdropdown ? "" : "hidden"} bg-neutral-primary-medium bg-gray-700 rounded-2xl rounded-base shadow-lg w-44 absolute top-13 left-23`}>
              <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
                <li>
                  <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                </li>
                <li>
                  <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your page</Link>
                </li>


                <li>
                  <Link href="#" onClick={() => { signOut() }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
                </li>
              </ul>
            </div> </>
          }
        </div>
        {!session && <Link href={"/login"}>
          <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>Login</button>
        </Link>}
      </div>

    </nav>
  )
}

export default Navbar