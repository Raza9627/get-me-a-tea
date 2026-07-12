import React from 'react'

const about = () => {
  return (
    <div>
 
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] text-white flex-1">
      <div className="max-w-5xl mx-auto px-6 md:py-16 py-4">

        <h1 className="md:text-5xl text-2xl font-bold text-center mb-4">
          About Get Me A Chai ☕
        </h1>

        <p className="text-center text-white md:text-lg md:mb-12 mb-4">
          Empowering creators, one cup of chai at a time.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              What is Get Me A Chai?
            </h2>

            <p className="text-white leading-8">
              Get Me A Chai is a creator support platform inspired by Patreon
              and Buy Me A Coffee. It allows fans to support their favourite
              creators by contributing a small amount—just like buying them a
              cup of chai.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Why this Project?
            </h2>

            <p className="text-white leading-8">
              Many talented creators produce amazing content but struggle to
              monetize their work. Get Me A Chai provides a simple and friendly
              way for supporters to contribute directly.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 shadow-lg">

          <h2 className="text-3xl font-semibold mb-6">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-white">

            <div>✅ GitHub Authentication</div>
            <div>✅ Secure Payments</div>
            <div>✅ Personalized Creator Pages</div>
            <div>✅ Support Messages</div>
            <div>✅ Responsive Design</div>
            <div>✅ Fast & Modern UI</div>

          </div>

        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 shadow-lg">

          <h2 className="text-3xl font-semibold mb-6">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "MongoDB",
              "NextAuth",
              "Razorpay",
              "Node.js",
              "Mongoose"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-12 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Support Creators ❤️
          </h2>

          <p className="text-white max-w-2xl mx-auto">
            Every contribution helps creators continue building amazing content.
            Buy them a chai and become a part of their journey.
          </p>

        </div>

      </div>
    </div>
    </div>
  )
}

export default about
export const metadata ={
    title:"About - Get Me A Chai",
}