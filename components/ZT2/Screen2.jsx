import React, { useState, useEffect } from "react";

import Screen2data from "./Screen2data";
import Header from "../Header";
const Screen2 = () => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBg("/images/Screen_Woman_ZTFR.jpg");
    }, 3000);
  }, [bg]);
  return (
    <div className="relative bg-[#FFFF00] overflow-hidden">
      <Header />
      <Screen2data bg = {bg}/>
    </div>
  );
};

export default Screen2;
