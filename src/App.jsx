import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";   


export default function App() {
  return (
   <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden bg-gradient-to-b from-black via-[#00111a] to-black text-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 fixed w-full top-0 backdrop-blur-md bg-black/20 z-50">
        <h1 className="text-2xl font-bold">
          <span className="text-[#00e3b3]">Golden</span>
          <span className="text-yellow-400">Finance</span>
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Who We Are</li>
          <li className="hover:text-white cursor-pointer">Learn</li>
          <li className="hover:text-white cursor-pointer">Dashboard</li>
        </ul>

        <div className="flex gap-4">
          <button className="px-4 py-1 border border-[#00e3b3] text-[#00e3b3] rounded-md hover:bg-[#00e3b3] hover:text-black transition">
            Log In
          </button>
          <button className="px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition">
            Sign Up
          </button>
        </div>
      </nav>

     {/* HERO SECTION */}
<header className="snap-center relative flex flex-col justify-center items-center text-center min-h-screen px-6">

  {/* PARALLAX BACKDROP */}
  <motion.div
    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1600')] bg-cover bg-center opacity-5"
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 8, ease: "easeOut" }}
  />

  {/* FLOATING GLOW PARTICLES */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="animate-pulse absolute w-80 h-80 bg-[#00e3b3]/20 blur-3xl rounded-full top-[-10%] left-[20%]" />
    <div className="animate-pulse absolute w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full bottom-[-10%] right-[10%]" />
  </div>

  {/* FOREGROUND CONTENT */}
  <motion.h1
    className="relative z-10 text-6xl font-extrabold mb-4 leading-tight"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, ease: "easeOut" }}
  >
    <span className="text-[#00e3b3]">Your Money.</span><br />
    <span className="text-yellow-400">Your Move.</span>
  </motion.h1>

  <motion.p
    className="relative z-10 text-gray-300 max-w-xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.3, ease: "easeOut" }}
  >
    Empower your financial journey. Invest smart, grow wealth, and secure your future with confidence.
  </motion.p>

  <motion.button
    className="relative z-10 mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.92 }}
  >
    Get Started
  </motion.button>

</header>



      {/* SCROLL SECTION 1 — INVEST IN YOUR COMMUNITY */}
<section className="snap-center flex flex-col md:flex-row items-center gap-10 px-12 py-24 border-t border-gray-700 min-h-screen">

  {/* LEFT SIDE TEXT */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold text-[#00e3b3] mb-4">
      Invest in Your Community
    </h2>
    <p className="text-gray-300 max-w-md leading-relaxed">
      GoldenFinance connects local investors with local projects.  
      Support the growth you want to see — from small businesses to housing developments.
      When your community grows, <strong>you</strong> grow.
    </p>
    <motion.button
      className="mt-8 px-6 py-2 border border-[#00e3b3] text-[#00e3b3] rounded-md hover:bg-[#00e3b3] hover:text-black transition"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
    </motion.button>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    className="flex-1 flex justify-center"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
      alt="Community Investment"
      className="rounded-xl shadow-2xl border border-[#00e3b3]/40"
    />
  </motion.div>

</section>


      {/* SCROLL SECTION — FIND YOUR CITY */}
<section className="snap-center flex flex-col md:flex-row items-center gap-10 px-12 py-24 border-t border-gray-700 min-h-screen">

  {/* RIGHT SIDE MAP IMAGE (Zoom + Fade On Scroll) */}
  <motion.div
    className="flex-1 flex justify-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.img
      src="https://images.unsplash.com/photo-1526403225646-8a758819b3e0?w=900"
      alt="City Map"
      className="rounded-xl shadow-2xl border border-[#00e3b3]/40"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    />
  </motion.div>

  {/* LEFT SIDE TEXT */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold text-[#00e3b3] mb-6">
      Find Your City
    </h2>

    <p className="text-gray-300 max-w-md leading-relaxed">
      GoldenFinance is expanding across the U.S.  
      Discover investment opportunities and community-led projects in your area.
      Whether you're in a major city or growing town — your financial journey starts local.
    </p>

    <motion.button
      className="mt-8 px-6 py-2 border border-[#00e3b3] text-[#00e3b3] rounded-md hover:bg-[#00e3b3] hover:text-black transition"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Explore Cities
    </motion.button>
  </motion.div>

</section>

{/* SCROLL SECTION — LEARN */}
<section className="snap-center flex flex-col md:flex-row items-center gap-16 px-12 py-32 border-t border-gray-700 min-h-screen">

  {/* LEFT TEXT */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold text-[#00e3b3] mb-6">
      Learn to Invest Smart
    </h2>
    <p className="text-gray-300 max-w-md leading-relaxed">
      Whether you're new to finance or leveling up, our learning hub guides
      you through investing — without the jargon.
    </p>

    <motion.button
      className="mt-8 px-6 py-2 border border-[#00e3b3] text-[#00e3b3] rounded-md hover:bg-[#00e3b3] hover:text-black transition"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Start Learning
    </motion.button>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    className="flex-1 flex justify-center"
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1605901309584-818e2596005d?w=900"
      alt="Education"
      className="rounded-xl shadow-2xl border border-[#00e3b3]/40"
    />
  </motion.div>

</section>


<footer className="snap-end px-12 py-12 border-t border-gray-700 text-center text-gray-400">

  <h2 className="text-2xl font-bold mb-4">
    <span className="text-[#00e3b3]">Golden</span>
    <span className="text-yellow-400">Finance</span>
  </h2>

  <div className="flex justify-center gap-6 mb-6 text-gray-400">
    <a href="#" className="hover:text-white transition">Who We Are</a>
    <a href="#" className="hover:text-white transition">Learn</a>
    <a href="#" className="hover:text-white transition">Dashboard</a>
  </div>

  <div className="flex justify-center gap-6 text-xl mb-6">
    <a href="#" className="hover:text-[#00e3b3] transition">🌐</a>
    <a href="#" className="hover:text-[#00e3b3] transition">🐦</a>
    <a href="#" className="hover:text-[#00e3b3] transition">📸</a>
  </div>

  <p className="text-sm text-gray-500">© {new Date().getFullYear()} GoldenFinance. All rights reserved.</p>

</footer>
    </div>
  );
}
