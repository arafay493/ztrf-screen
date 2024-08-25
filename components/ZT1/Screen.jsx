import React, { useState, useEffect } from "react";
import CardPin from "./CardPin";
import MainHeading from "../MainHeading";
import { motion } from "framer-motion";
import Header from "../Header";
const Screen = ({ setScreen }) => {
  const [className, setClassName] = useState("");
  const [bg, setBg] = useState("");
  const setClass = () => {
    if (className === "") {
      setClassName("");
      // dispatch(BgSlise(bg))
    } else {
      setClassName("invert");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setBg("/images/Screen_Woman_ZTFR.jpg");
    }, 3000);
    setClass();
  }, [bg]);

  return (
    <div className="relative  bg-[#FFFF00] overflow-hidden">
      {bg === "" && (
        <>
          <Header bg={bg} c={className} setClass={setClass} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-screen transition opacity-100 delay-1000"
          >
            <CardPin setScreen={setScreen} theme="black" setClass={setClass} />
            <MainHeading theme="black" />
          </motion.div>
        </>
      )}
      {bg !== "" && (
        <>
          <Header bg={bg} className={className} setClass={setClass} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={bg !== "" ? { duration: 1 } : { duration: 0.5 }}
            className="h-screen bg-cover bg-center bg-no-repeat transition opacity-100 delay-1000"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <CardPin setScreen={setScreen} theme="white" setClass={setClass} />
            <MainHeading theme="white" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Screen;
