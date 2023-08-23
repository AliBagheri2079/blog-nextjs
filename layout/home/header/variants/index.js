const variants = {
  horizontal: {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    hide: {
      x: -100,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  },

  scale: {
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5,
        scale: { stiffness: 1000, velocity: -100 },
      },
    },
    hide: {
      scale: 0,
      opacity: 0,
      transition: {
        scale: { stiffness: 1000 },
      },
    },
  },

  vertical: {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hide: {
      y: -100,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

export default variants;
