import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FollowPointerButton = React.forwardRef(
  (
    {
      children,
      className,
      point,
      handlePointerMove,
      handlePointerOut,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        className={className}
        animate={{ x: point.x, y: point.y }}
        transition={{
          type: 'spring',
          damping: 5,
          stiffness: 50,
          restDelta: 0.001,
        }}
        onPointerMove={handlePointerMove}
        onPointerOut={handlePointerOut}
        whileHover={{ scale: 1.1 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
FollowPointerButton.displayName = 'FollowPointerButton';

FollowPointerButton.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  point: PropTypes.objectOf(PropTypes.number).isRequired,
  handlePointerMove: PropTypes.func.isRequired,
  handlePointerOut: PropTypes.func.isRequired,
};

export default FollowPointerButton;
