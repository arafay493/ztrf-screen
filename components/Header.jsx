import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import BgSlise from "@/store/Slices/BgSlise";
// const Header = ({ bg, c }) => {
const Header = ({ bg }) => {
  const className = "";
  // const [className, setClassName] = useState(c);
  // const background = useSelector((state) => state.setBg);
  // const dispatch = useDispatch();
  // console.log(background);
  // console.log(bg);
  // console.log(stateBg)
  // console.log(bg)

  // useEffect(() => {
  //   if (bg !== "") {
  //     dispatch(BgSlise(bg));
  //   }
  // }, [bg]);
  return (
    <>
      <header className="absolute top-0 left-0 w-screen flex justify-between items-center px-[25px] md:px-[50px] py-[25px] z-50">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "circInOut",
            duration: 1,
            x: { duration: 1 },
          }}
          className="logo"
        >
          <Image
            src="/images/ZTFR.png"
            width={147}
            height={50}
            alt="Logo"
            className={className}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "circInOut",
            duration: 1,
            x: { duration: 1 },
          }}
          className="flex justify-center items-center gap-[30.4px]"
        >
          <div>
            <Image
              src="/images/user_icon.png"
              width={20.59}
              height={25}
              alt="user"
              className={className}
            />
          </div>
          <div>
            <Image
              src="/images/Country_Flag.png"
              width={50}
              height={50}
              alt="Flag"
            />
          </div>
        </motion.div>
      </header>
      <header className="absolute top-0 left-0 w-screen flex justify-between items-center px-[25px] md:px-[50px] py-[25px] z-50">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "circInOut",
            duration: 1,
            x: { duration: 1 },
          }}
          className="logo"
        >
          <Image
            src="/images/ZTFR.png"
            width={147}
            height={50}
            alt="Logo"
            className={className}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "circInOut",
            duration: 1,
            x: { duration: 1 },
          }}
          className="flex justify-center items-center gap-[30.4px]"
        >
          <div>
            <Image
              src="/images/user_icon.png"
              width={20.59}
              height={25}
              alt="user"
              className={className}
            />
          </div>
          <div>
            <Image
              src="/images/Country_Flag.png"
              width={50}
              height={50}
              alt="Flag"
            />
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
