import React, {useState, useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Footer = () => {
  const [theme, setTheme] = useState("black");

  useEffect(() => {
    setTimeout(() => {
      if (theme === "white") {
        setTheme("black")
      } else {
        setTheme("white");
      }
    }, 3000);
  }, []);
  return (
    <footer
      className={`absolute bottom-0 left-0 flex flex-col lg:flex-row gap-2 justify-between w-screen px-[25px]  md:px-[50px] py-[24.1px] uppercase tracking-[1.5px] text-[7px] font-bold text-${theme}`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          ease: "circInOut",
          duration: 2,
          x: { duration: 1 },
        }}
        className="flex flex-col gap-2"
      >
        <div>&copy; Zitransfer 2023</div>
        <div className="flex gap-[20px]">
          <div>All right reserved</div>
          <div>zitransfer is part of zimo group</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          ease: "circInOut",
          duration: 1,
          x: { duration: 1 },
        }}
        className="flex items-baseline w-fit h-fit gap-2 sm:whitespace-nowrap -ms-3"
      >
        <div>
          <Image
            className={theme === "white" ? "invert" : "invert-0"}
            src="/images/lock.png"
            width={5.02}
            height={6.39}
            alt="lock"
          />
        </div>
        <span className="w-fit">
          zitranser uses advance encryption standard (AES) 256-bit to Protect
          the confidentiality of the data you upload
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
