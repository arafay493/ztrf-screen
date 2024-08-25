import React from "react";
import CardPin from "./CardPin";
import MainHeading from "../MainHeading";
import { motion } from "framer-motion";
const Screen1data = ({ bg }) => {
  return (
    <>
      {bg === "" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-screen transition opacity-100 delay-1000"
        >
          <CardPin setScreen={setScreen} theme="black" />
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
          <CardPin setScreen={setScreen} theme="white" />
          <MainHeading theme="white" />
        </motion.div>
      )}
    </>
  );
};

export default Screen1data;
