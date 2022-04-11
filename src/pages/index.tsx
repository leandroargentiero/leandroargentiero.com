import type { NextPage } from "next";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import WhatICanDo from "@/sections/WhatICanDo";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <WhatICanDo />
      <Navigation />
    </>
  );
};

export default Home;
