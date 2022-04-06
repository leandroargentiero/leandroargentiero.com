import { FiSun } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="h-screen w-screen py-6 px-6">
      <div className="relative h-full w-full rounded-3xl bg-pastel-pink">
        <div className="flex flex-row justify-between p-8">
          <a href="#">Leandro</a>
          <div className="grid grid-flow-col items-center gap-4 font-display text-sm">
            <p>antwerp</p>
            <p>4°C</p>
            <FiSun />
          </div>
        </div>
        <div className="absolute top-0 left-0 grid h-full w-full place-content-center">
          <div className="flex flex-col items-center font-display text-gray-900">
            <h2 className="mb-4">Hi, I&apos;m Leandro</h2>
            <h1 className="relative max-w-2xl text-9xl font-semibold leading-[7rem]">
              <span className="-ml-16 inline-block">frontend</span>
              <span className="ml-44 inline-block">developer</span>
              <span className="inline-block">{"& designer"}</span>
            </h1>
            <h3 className="mt-12 text-center">
              I craft digital solutions for human problems <br /> that look good
              and work well.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
