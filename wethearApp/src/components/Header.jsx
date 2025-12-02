import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="h-screen flex flex-col">
      
      {/* TOP LEFT COMPONENT */}
      <div className="w-full flex justify-end items-center px-6 py-4 text-white">
        <div>
          
        </div>
      </div>

      {/* CENTERED HERO */}
      <div className="flex-1 flex justify-center items-center text-white">
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-8xl font-extrabold glow tracking-wide"
          >
            NimBus
          </motion.h1>

          <p className="text-lg mt-3 opacity-80 animate-pulse">
            Bringing Clarity to Everyday
          </p>

          <div className="mt-6 w-32 h-1 mx-auto bg-purple-500/40 rounded-full blur-md"></div>
        </div>
      </div>

    </div>
  );
};

export default Header;
