import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const CardPin = ({ setScreen, theme , setClass}) => {
  const cardActive = () => {
    setClass()
    setScreen(false)
  }
  return (
    <div
      className={`relative top-1/2 -translate-y-1/2 -translate-x-10 left-0 font-semibold text-${theme} uppercase z-30`}
      
    >
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className={`w-[157px] h-[489px] ${
          (theme === "white") ? "bg-black/75" : "bg-black"
        } flex justify-end items-center rounded-se-3xl rounded-ee-3xl relative cardPin cursor-pointer`}
        onClick={() => cardActive()}
      >
        {/* h-[250px] sm:h-[280px] md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[489px] */}
        <div
          className={`-rotate-90 w-[300px] h-[36px] absolute -left-[3.5rem] right-0 top-1/2 -translate-y-1/2 ${
            theme === "white" ? "text-white" : "text-[#FFFF00]"
          } text-[12px] tracking-[1.4px] text-center font-light click_upload`}
        >
          {/* w-auto md:w-[220px] lg:w-[250px] xl:w-[300px]  */}
          UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW
        </div>
        <div className="self-start relative top-[25px] -right-[10px] w-[45px] h-[240.43px] overflow-auto">
          {/* <div className="flex absolute top-[21px] w-full"></div> */}
          <div className="relative flex overflow-visible w-full h-full">
            <div className="flex-1">
              {theme === "black" ? <Image
                src="/images/lockY.png"
                width={12.18}
                height={15.5}
                alt="lock"
              />:
              <Image
                src="/images/lockw.png"
                width={12.18}
                height={15.5}
                alt="lock"
              />}
            </div>
            <div className="origin-top-left absolute top-0 left-full rotate-90 flex-1 text-[7px] w-[240.43px] tracking-[1.5px]">
              Advance Encryption standard (AES) 256-BIT
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardPin;
