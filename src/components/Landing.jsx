import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className='w-full h-full relative bg-gray-900'>
      <motion.img
        src={`https://static-prod.adweek.com/wp-content/uploads/2022/03/movie-theater-buys-back-2022.jpg`}
        alt='Hero Img'
        className='w-full h-full object-cover -mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.div
          className="w-max"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="font-oswald pr-5 text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            ACS 3330
          </h1>
          <h2 className="font-oswald text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">
            Single Page Web Applications
          </h2>
          <h3 className="font-oswald text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
            Custom Project
          </h3>
          <h3 className="font-oswald text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            By: Sharmaine L. Borbe
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;