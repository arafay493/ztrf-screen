import Screen from "@/components/ZT1/Screen";
import Screen2 from "@/components/ZT2/Screen2";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [screen, setScreen] = useState(true);
  return (
    <div className="overflow-y-hidden">
      <Head>
        <title>ZTFR - Screens</title>
      </Head>
      {screen === true && <Screen setScreen={setScreen} />}
      {screen === false && <Screen2 />}
    </div>
  );
}
