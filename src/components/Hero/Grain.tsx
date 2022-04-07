declare interface GrainProps {
  opacity: number;
}

export const Grain = ({ opacity }: GrainProps): JSX.Element => (
  <div
    className={`after:fixed after:left-[-50%] after:top-[-50%] after:right-[-50%] after:bottom-[-50%] after:z-10 after:h-[200vh] after:w-[200vw] after:animate-grain after:bg-[url('/assets/noise.png')] after:bg-repeat after:opacity-${opacity} after:content-['']`}
  />
);
