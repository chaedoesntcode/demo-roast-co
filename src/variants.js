export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
};

export const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
    // ease: [0.43, 0.13, 0.23, 0.96],
};