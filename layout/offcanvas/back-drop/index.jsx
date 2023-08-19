import { motion } from 'framer-motion';

const variants = {
  open: {
    clipPath: 'circle(150% at top right)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0% at top right)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const OffcanvasBackdrop = () => {
  return (
    <motion.div
      layoutId='backdrop'
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
      className='absolute inset-0 -z-10 bg-secondary'
    />
  );
};

export default OffcanvasBackdrop;
