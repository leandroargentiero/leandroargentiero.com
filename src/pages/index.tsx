import type { NextPage } from 'next';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

import WhatICanDo from '@/sections/Home/WhatICanDo';
import SelectedWork from '@/sections/Home/SelectedWork';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <WhatICanDo />
      <SelectedWork />
      <Navigation />
      <Footer />
    </>
  );
};

export default Home;
