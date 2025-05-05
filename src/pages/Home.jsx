import React from 'react'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
  <>
     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Coming Soon | Happy Society</title>
        <meta name="description" content="Happy Society is launching soon. Stay tuned for something amazing!" />
        <meta name="keywords" content="Happy Society, coming soon, real estate, society launch, flats" />
        <meta name="author" content="Happy Society" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Social Sharing Meta Tags */}
        <meta property="og:title" content="Happy Society - Coming Soon" />
        <meta property="og:description" content="We're building something amazing. Be the first to know!" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://happysociety.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Happy Society - Coming Soon" />
        <meta name="twitter:description" content="Be the first to know when we launch something great!" />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Coming Soon UI */}
      <main className="bg-white rounded-2xl shadow-xl p-10 max-w-lg text-center">
        <img
          src="/Images/Logo.webp"
          alt="Happy Society Logo"
          className="mx-auto w-24 h-24 mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Happy Society</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Coming Soon</h2>
        <p className="text-gray-600 mb-6">We're working on something exciting. Get notified when we launch!</p>

       

        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Happy Society. All rights reserved.
        </p>
      </main>
    </div>
  </>
  )
}

export default Home
