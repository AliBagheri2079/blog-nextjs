/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = config => {
  React.useEffect(() => {
    const lenis = new Lenis(config);

    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
};

export default useLenis;
