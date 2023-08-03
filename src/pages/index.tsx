import type { NextPage } from 'next';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

import { WhatICanDo, SelectedWork } from '@/sections/Home';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SelectedWork />
      <WhatICanDo />
      <Navigation />
      <Footer />
    </>
  );
};

export default Home;
