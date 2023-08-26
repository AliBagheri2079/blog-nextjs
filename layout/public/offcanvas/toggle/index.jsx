import { motion } from 'framer-motion';

import { Text } from './index.styled';
import { BlobButton } from '@/components/button';
import { AbsoluteOverlay } from '@/components/overlay';
import { SheetTrigger } from '@/components/ui/sheet';

const MotionComponent = motion(AbsoluteOverlay);

const OffcanvasToggle = () => {
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
        insetBlockEnd: 'auto',
        insetInlineStart: 'auto',
        me: '1.5rem',
        mt: '1.5rem',
      }}
    >
      <SheetTrigger asChild>
        <BlobButton
          variant='ghost'
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
      </SheetTrigger>
    </MotionComponent>
  );
};

export default OffcanvasToggle;
