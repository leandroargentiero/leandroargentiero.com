import type { NextPage } from 'next';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import WhatICanDo from '@/sections/WhatICanDo';
import SelectedWork from '@/sections/SelectedWork';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <WhatICanDo />
      <SelectedWork />
      <Navigation />
    </>
  );
};

export default Home;
