import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <div className='flex justify-center flex-col gap-6 md:gap-8 items-center text-white h-[44vh]'>
        <div className="font-bold text-4xl">Buy Me a Tea🍵</div>
        <p className='text-1xl px-8 flex-wrap text-center'>
          Support your favourite creators with a simple cup of tea a warm, thoughtful gesture that goes beyond words. It’s an easy, one-time way to show appreciation, turn gratitude into real impact, and help creators keep doing what they love
        </p>
        <div>
          <Link href={"/login"}>
            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Start Here</button>
          </Link>
          <Link href={"/about"}>
            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>
      <div className="text-white container mx-auto p-12">
        <h1 className='text-[21px] font-bold text-center mb-14'>Your Fans Can Buy You a Tea</h1>
        <div className="flex flex-col md:flex-row gap-15 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center md:w-1/3">
            <img className='bg-slate-400 rounded-full  text-black ' width={110} src="508.jpg" alt="man" />
            <p className='font-bold'>Fans Want to help</p>
            <p className='text-center text-[14px]'>Your Supporters genuinely want to contribute and be part of your journey</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center md:w-1/3">
            <img className='bg-slate-400 rounded-full text-black ' width={110} src="dollar.gif" alt="coin-flip" />
            <p className='font-bold'>Effortless Appreciation</p>
            <p className='text-center text-[14px]'>No commitments,no subscriptions -- just pure support</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center md:w-1/3">
            <img className='bg-slate-400 rounded-full text-black ' width={110} src="altruism.gif" alt="donation" />
            <p className='font-bold'>Creator first support</p>
            <p className='text-center text-[14px]'>Built to empower creators through direct fan contributions</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="md:h-[72vh] md:w-full md:px-6 flex flex-col md:flex-row  items-center md:gap-8">
        <iframe className='mt-6 md:w-1/2 md:h-[60vh]' width="315" height="200" src="https://www.youtube.com/embed/b-A37LXTpio?si=-RPZTrgTfcYrxjJ6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="latest md:w-1/2 md:flex md:flex-col flex flex-col justify-center items-center">
        <h1 className='text-white font-bold text-[21px] mt-7'>Learn more about us</h1>
        <p className=' text-white px-7 md:px-16 py-2 text-center'>discover how a simple cup of tea can become a meaningful way to support creators you love. We believe appreciation shouldn’t be complicated or forced—just a small, genuine gesture that directly empowers creators, helps them grow, and keeps creativity alive, without subscriptions, pressure, or hidden commitments.</p>
      </div>
      </div>
    </>
  )
}

export default page