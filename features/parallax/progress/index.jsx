import { motion, useScroll, useSpring } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const MotionComponent = motion(Progress);

const ParallaxProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <MotionComponent className='h-1 bg-foreground' style={{ scaleX }} />;
};

export default ParallaxProgress;
