import { motion } from "framer-motion";
import { useState } from "react";
import song from "./assets/music/song.mp3";
import img1 from "./assets/photos/IMG_2174.jpg";
import img2 from "./assets/photos/IMG_2736.jpg";
import img3 from "./assets/photos/IMG_4569.jpg";
import img4 from "./assets/photos/IMG_6108.jpg";
import img5 from "./assets/photos/IMG_3627.jpg";
function FloatingHeart({ delay, left }) {
  return (
    <motion.div
      initial={{ y: 800, opacity: 0 }}
      animate={{
        y: -200,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
      className="absolute text-3xl"
      style={{ left }}
    >
      ❤️
    </motion.div>
  );
}

function Envelope({ message }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    >
      <div className="relative w-72 h-48">

        {/* Envelope Body */}
        <div className="absolute bottom-0 w-full h-40 bg-[#F5E6D3] rounded-xl shadow-2xl z-10"></div>

        {/* Envelope Top */}
        <motion.div
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 w-full h-24 bg-[#E8D5C4] origin-top rounded-t-xl z-10"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          }}
        />

        {/* Letter */}
        <motion.div
          initial={false}
          animate={{
            y: open ? -120 : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 top-16 w-60 bg-white p-5 rounded-lg shadow-xl z-30"
        >
          <p className="text-center text-[#7A0000] font-bold">
            {message}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#7A0000] text-white flex flex-col items-center">

      {/* Floating Hearts */}
      <FloatingHeart delay={0} left="10%" />
      <FloatingHeart delay={2} left="25%" />
      <FloatingHeart delay={4} left="40%" />
      <FloatingHeart delay={1} left="60%" />
      <FloatingHeart delay={3} left="75%" />
      <FloatingHeart delay={5} left="90%" />

      {/* Hero */}
      <div className="h-screen flex flex-col justify-center items-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl font-bold z-10"
        >
          Happy Birthday ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl z-10"
        >
          A little surprise made with love ✨
        </motion.p>

      </div>

      {/* Envelope Section */}
 {/* Scrapbook Gallery */}

<div className="w-full min-h-screen bg-[#F5E6D3] py-24 px-8">

  <h1 className="text-center text-5xl font-bold text-[#7A0000] mb-20">
    Our Memories ❤️
  </h1>

  <div className="flex flex-wrap justify-center gap-16">

    {/* Card 1 */}
    <div className="bg-white p-4 shadow-2xl rotate-[-6deg] w-72 hover:scale-105 transition duration-300">

      <img
        src={img1}
        alt="memory"
        className="w-full h-80 object-cover"
      />

      <p className="text-center mt-4 text-[#7A0000] font-bold text-lg">
        that 'last day' energy still lives in my camera roll rent free ❤️
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white p-4 shadow-2xl rotate-[4deg] w-72 hover:scale-105 transition duration-300">

      <img
        src={img2}
        alt="memory"
        className="w-full h-80 object-cover"
      />

      <p className="text-center mt-4 text-[#7A0000] font-bold text-lg">
        colorful Onam vibes ✨
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-white p-4 shadow-2xl rotate-[-3deg] w-72 hover:scale-105 transition duration-300">

      <img
        src={img3}
        alt="memory"
        className="w-full h-80 object-cover"
      />

      <p className="text-center mt-4 text-[#7A0000] font-bold text-lg">
        Our first journey to Gurudwara 🎂
      </p>

    </div>

    {/* Card 4 */}
    <div className="bg-white p-4 shadow-2xl rotate-[5deg] w-72 hover:scale-105 transition duration-300">

      <img
        src={img4}
        alt="memory"
        className="w-full h-80 object-cover"
      />

      <p className="text-center mt-4 text-[#7A0000] font-bold text-lg">
        Our Long walk and talk through the college Compound 💖
      </p>

    </div>

    {/* Card 5 */}
    <div className="bg-white p-4 shadow-2xl rotate-[-5deg] w-72 hover:scale-105 transition duration-300">

      <img
        src={img5}
        alt="memory"
        className="w-full h-80 object-cover"
      />

      <p className="text-center mt-4 text-[#7A0000] font-bold text-lg">
        Lost in Kodai, found this moment 🌿 🌸
      </p>

    </div>

  </div>

</div>
{/* Music Section */}

<div className="w-full min-h-screen bg-[#7A0000] flex flex-col justify-center items-center text-white px-6">

  <h1 className="text-5xl md:text-6xl font-bold mb-16">
    A small wish 🎶
  </h1>

  {/* Vinyl */}
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 bg-red-500 blur-3xl opacity-30 rounded-full"></div>

    {/* Disc */}
    <div className="w-72 h-72 bg-black rounded-full border-[12px] border-gray-800 animate-spin flex justify-center items-center relative z-10">

      {/* Center */}
      <div className="w-20 h-20 bg-[#F5E6D3] rounded-full border-4 border-gray-700"></div>

    </div>

  </div>

  {/* Song Title */}
  <p className="mt-10 text-2xl text-center">
    for my cutest pottathi❤️
  </p>

  {/* Audio Player */}
  <audio
    controls
    className="mt-10 w-full max-w-md"
  >
    <source src={song} type="audio/mp3" />
  </audio>

</div>
{/* Love Letter Section */}

<div className="w-full min-h-screen bg-[#F5E6D3] flex justify-center items-center px-6 py-24">

  <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-10 md:p-16 relative">

    {/* Decorative Hearts */}
    <div className="absolute top-6 right-8 text-4xl">
      ❤️
    </div>

    <div className="absolute bottom-6 left-8 text-4xl">
      ✨
    </div>

    {/* Title */}
    <h1 className="text-5xl font-bold text-[#7A0000] text-center mb-12">
      A Letter For You 💌
    </h1>

    {/* Letter Content */}
    <div className="text-[#5A3E36] text-lg md:text-2xl leading-10 space-y-8">

    
      <p>
        Dear Madam jii, 
      </p>

      <p>
        Happy Birthday to the most special person in my life ❤️
      </p>

      <p>
        On this special day, I want to take a moment to express how grateful I am to have you in my life. Your kindness, warmth, and unwavering support have been a constant source of comfort and joy for me.
      </p>

      <p>
        Thank you for every smile, every memory, and every beautiful moment we shared together.
      </p>

      <p>
        You make ordinary days feel magical, and your presence makes life brighter in ways words cannot explain.
      </p>

      <p>
        I hope this birthday brings endless happiness, peace, success, and all the love you truly deserve ✨
      </p>

      <p>
        No matter where life takes us, these memories will always remain special to me 🌸
      </p>

      <p className="text-right text-3xl font-bold text-[#7A0000] mt-12">
        — With Love ❤️
        yadhuuuuu
      </p>

    </div>

  </div>

</div>
{/* Final Surprise Section */}

<div className="w-full min-h-screen bg-black flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute w-[500px] h-[500px] bg-red-600 blur-[180px] opacity-30 rounded-full"></div>

  {/* Main Content */}
  <div className="relative z-10">

    <h1 className="text-6xl md:text-8xl font-bold text-white">
      Happy Birthday Guki ❤️
    </h1>

    <p className="mt-10 text-2xl md:text-3xl text-gray-300 max-w-3xl leading-10">
      Thank you for being part of my life and creating memories I will always cherish ✨
    </p>

    <button
      onClick={() => {
        import("canvas-confetti").then((confetti) => {
          confetti.default({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 },
          });
        });
      }}
      className="mt-16 bg-red-700 hover:bg-red-600 px-10 py-5 rounded-full text-2xl font-bold transition duration-300 hover:scale-110 shadow-2xl"
    >
      Celebrate 🎉
    </button>

  </div>

</div>
      <div className="w-full py-32 flex flex-wrap justify-center gap-16 px-10">

        <Envelope message="I miss you calling me 'pottan 😙'" />

        <Envelope message="Remember when we went to Karupatti? I used to take bigger bites than you and we'd fight over the piece 😆" />

        <Envelope message="the ice cream cone wars were real 😂" />

        <Envelope message="fighhtingggggg we got this ✊" />


      </div>

    </div>
  );
}

export default App;