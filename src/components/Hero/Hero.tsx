import { FiSun } from "react-icons/fi";
import "twallpaper/dist/twallpaper.css";

import { WHITE, INDIGO, PINK } from "@/constants/colors";
import { Logo } from "@/components/Logo";
import { Gradient } from "./Gradient";
import { Grain } from "./Grain";

export const Hero = () => {
  return (
    <section className="relative h-screen w-screen p-3 md:p-4">
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-pastel-pink">
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          <header className="flex flex-row justify-between p-8">
            <Logo />
            <div className="grid grid-flow-col items-center gap-4 font-display text-sm">
              <p>antwerp</p>
              <p>4°C</p>
              <FiSun />
            </div>
          </header>
          <div className="absolute top-0 left-0 grid h-full w-full place-content-center">
            <div className="flex flex-col items-center font-display text-gray-900">
              <h2 className="mb-4">Hi, I&apos;m Leandro</h2>
              <h1 className="relative flex max-w-2xl flex-col text-center text-5xl font-semibold leading-[2.8rem] sm:text-7xl sm:leading-[4rem] lg:text-8xl lg:leading-[5rem]">
                <span className="-ml-20">frontend</span>
                <span className="ml-24">developer</span>
                <span className="-ml-4 ">{"& designer"}</span>
              </h1>
              <h3 className="mt-8 text-center">
                I craft digital solutions for human problems <br /> that look
                good and work well.
              </h3>
            </div>
          </div>
        </div>
        <Grain />
        <Gradient colors={[WHITE, INDIGO, INDIGO, PINK]} tails={200} />
      </div>
    </section>
  );
};
