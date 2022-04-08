import type { NextPage } from "next";
import { Hero } from "@/components/Hero";
import WhatICanDo from "@/sections/WhatICanDo";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <WhatICanDo />
    </>
  );
};

export default Home;
