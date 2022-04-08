export const paddingContainer = {
  initial: {
    padding: "0",
    borderRadius: 0,
  },
  end: {
    padding: "16px",
    transition: {
      delay: 0.5,
    },
  },
};

export const containerBorderRadius = {
  initial: {
    borderRadius: "Orem",
  },
  end: {
    borderRadius: "1.5rem",
    transition: {
      delay: 0.5,
    },
  },
};

export const fadeInY = (delay: number, yStart: string, yEnd: string) => ({
  initial: {
    y: yStart,
    opacity: "0",
  },
  end: {
    y: yEnd,
    opacity: "1",
    transition: {
      delay,
    },
  },
});

export const fadeInX = (
  delay: number,
  xStart: string,
  xEnd: string,
  duration: number
) => ({
  initial: {
    x: xStart,
    opacity: "0",
  },
  end: {
    x: xEnd,
    opacity: "1",
    transition: {
      delay,
      duration,
    },
  },
});
