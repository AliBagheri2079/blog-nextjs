import { motion } from 'framer-motion';
import { AbsoluteOverlay } from '@/components/overlay';

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

const MotionComponent = motion(AbsoluteOverlay);

const OffcanvasBackdrop = () => {
  return (
    <MotionComponent
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
      css={{
        bg: 'hsl(var(--secondary))',
      }}
    />
  );
};

export default OffcanvasBackdrop;
