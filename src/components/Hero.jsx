// src/components/Hero.jsx
import Typewriter from "typewriter-effect";
import { Button } from "antd";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className='flex flex-col items-center justify-center text-center text-white font-steins min-h-screen'
  >
    <h1 className='text-6xl mb-4 neon-glow'>Welcome to the Steins;Gate</h1>
    <div className='text-xl text-accent mb-8'>
      <Typewriter
        options={{
          strings: ["The future is in our hands...", "El Psy Congroo"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
    <img
      src='divergence-meter.gif'
      alt='Future Gadget Lab'
      className='w-1/2 mb-8'
      draggable={false}
    />
    <Link smooth to='#timeline' className='nav-item' data-text='Timeline'>
      <Button
        type='primary'
        size='large'
        className='bg-gray-800 text-[#fb923c] px-6 py-3 text-lg font-mono rounded-lg shadow-lg hover:!bg-[#fb923c] hover:!text-gray-900 transform hover:scale-105 transition duration-300 ease-in-out'
      >
        Explore the Timeline
      </Button>
    </Link>
  </motion.div>
);
export default Hero;
