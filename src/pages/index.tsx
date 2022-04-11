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
      <div className="p-3">
        <footer className="overflow-hidden rounded-3xl bg-gray-100 px-12 pt-24 pb-12">
          <div className="mb-16 grid grid-cols-5 gap-x-4">
            <div className="col-span-2 flex flex-col justify-between font-display">
              <div className="mb-8">
                <h3 className="mb-4 text-3xl text-gray-900">
                  Let&apos;s build something together.
                </h3>
                <p className="font-body text-gray-400">
                  Now that you know me, let&apos;s talk about you. <br />
                  Feel free to reach out if you&apos;ve a question, or just want
                  to connect.
                </p>
              </div>
              <a href="#" className="text-2xl underline hover:no-underline">
                ciao@leandroargentiero.com
              </a>
            </div>
            <div className="w-full bg-gray-200">
              <h3>Personal Info</h3>
            </div>
            <div className="w-full bg-gray-200">
              <h3>Find Me on</h3>
            </div>
            <div className="w-full bg-gray-200">
              <h3>Sitemap</h3>
            </div>
          </div>
          <p className="font-body text-xs text-gray-400">
            © 2022 Leandro Argentiero - Built with Next.js and TailwindCSS
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
