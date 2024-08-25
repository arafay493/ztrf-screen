import React from "react";
import CardPin2 from "./CardPin2";
import MainHeading from "../MainHeading";
import { motion } from "framer-motion";
const Screen2data = ({ bg }) => {
  return (
    <>
      {bg === "" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-screen transition opacity-100 delay-1000"
        >
          <CardPin2 theme="black" />
          <MainHeading theme="black" />
        </motion.div>
      )}
      {bg !== "" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={bg !== "" ? { duration: 1 } : { duration: 0.5 }}
          className="h-screen bg-cover bg-center bg-no-repeat transition opacity-100 delay-1000"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <CardPin2 theme="white" />
          <MainHeading theme="white" />
        </motion.div>
      )}
    </>
  );
};

export default Screen2data;
