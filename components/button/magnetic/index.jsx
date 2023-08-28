import { useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useFollowPointer from '@/hooks/use-follow-pointer';

const MagneticButton = ({ children, ...props }) => {
  const elemRef = useRef(null);
  const [position, handlePointerMove, handlePointerOut] =
    useFollowPointer(elemRef);

  return (
    <motion.button
      ref={elemRef}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

MagneticButton.propTypes = {
  children: PropTypes.any.isRequired,
  props: PropTypes.any,
};

export default MagneticButton;
