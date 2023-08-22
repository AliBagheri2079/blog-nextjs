import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Text } from './index.styled';
import { BlobButton } from '@/components/button';
import { AbsoluteOverlay } from '@/components/overlay';

const MotionComponent = motion(AbsoluteOverlay);

const OffcanvasToggle = ({ toggle }) => {
  return (
    <MotionComponent
      drag
      dragConstraints={{
        top: -20,
        right: 0,
        left: -50,
        bottom: 50,
      }}
      dragElastic={0.3}
      css={{
        inset: '0 0 auto auto',
        me: '1.5rem',
        mt: '1.5rem',
        zIndex: '$overlay',
      }}
    >
      <BlobButton
        variant='ghost'
        onClick={toggle}
        css={{
          '&::before': {
            bg: 'hsl(var(--primary) / 0.75)',
          },
          '&::after': {
            borderColor: 'hsl(var(--foreground))',
          },
        }}
      >
        <Text>Menu</Text>
      </BlobButton>
    </MotionComponent>
  );
};

OffcanvasToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default OffcanvasToggle;
