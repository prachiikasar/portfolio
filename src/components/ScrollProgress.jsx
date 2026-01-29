import React from 'react';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
