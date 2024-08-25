import { motion } from "framer-motion";
import React from "react";
const MainHeading = ({theme}) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.1 ,duration: 0.5 }}
      className={`absolute top-[60%] sm:top-1/2 left-full -translate-x-[110%] md:left-[84%] lg:left-1/2 md:-translate-x-1/2 -translate-y-1/2 uppercase tracking-[5px] text-end flex flex-col justify-center items-center gap-3 md:gap-[5px] lg:gap-[10px] xl:gap-[15px] 2xl:gap-[23.6px] text-${theme} main-heading`}
    >
      <motion.div
      initial={{ scale: 0.5}}
      animate={{ scale: 1}}
      transition={{ delay: 0.1 ,duration: 0.5 }}
      className="flex flex-col items-center w-[130px] md:w-[230.14px] lg:w-[320.14px] 2xl:w-[468.14px] lg:h-[150.08px] xl:h-[200.08px] 2xl:h-[235.08px] text-justify sm:gap-[5.6px] md:gap-[10.6px] lg:gap-[15.6px] xl:gap-[20.6px] 2xl:gap-[30.6px]">
        <span className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  self-end tracking-[1.5px] sm:tracking-[2px] md:tracking-[4px] lg:tracking-[6px] xl:tracking-[7px] 2xl:tracking-[9px] break-keep lets_do">
          Let's do
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[7rem] 2xl:text-[10.9rem] flex justify-between w-full font-normal">
          <span>T</span>
          <span>H</span>
          <span>I</span>
          <span>S</span>
        </span>
      </motion.div>
      <motion.span
      initial={{ scale: 0.5}}
      animate={{ scale: 1}}
      transition={{ delay: 0.1 ,duration: 0.5 }}
      className="w-[130px] md:w-[180px] lg:w-[400px] 2xl:w-[567px] text-[8px] sm:text-[12px] whitespace-normal 2xl:whitespace-nowrap tracking-[2px] sm:tracking-[2px] md:text-center mt-[5px] sm:mt-[10px] md:mt-[15px] lg:mt-[30px] xl:mt-[50px] 2xl:mt-[90px] title-description">
        UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
      </motion.span>
    </motion.div>
  );
};

export default MainHeading;
