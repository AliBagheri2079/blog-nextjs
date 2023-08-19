import { stitches } from '@/lib/config/stitches.config';
import { Button } from '@/components/ui/button.jsx';

const borderTransform = stitches.keyframes({
  '0%, 100%': {
    borderRadius: '35% 65% 37% 63% / 35% 72% 28% 65%',
  },
  '33%': {
    borderRadius: '72% 28% 48% 48% / 28% 28% 72% 72%',
  },
  '66%': {
    borderRadius: '100% 56% 56% 100% / 100% 100% 56% 56%',
  },
});

const BlobButton = stitches.styled(Button, {
  position: 'relative',
  width: 'calc(2.5rem + 10vw)',
  height: 'unset',
  aspectRatio: '5 / 3',

  '&::before, &::after': {
    content: '',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
  },

  '&::before': {
    top: 0,
    overflow: 'hidden',
    animation: `${borderTransform} 8s linear infinite`,
  },

  '&::after': {
    top: '10%',
    zIndex: -1,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '60% 40% 55% 45% / 55% 45% 55% 45%',
    transform: 'rotate(-20deg)',
    transition: 'transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55)',
  },

  '&:hover': {
    backgroundColor: 'unset',
    color: 'unset',

    '&::before': {
      animationIterationCount: 0,
      borderRadius: '60% 40% 50% 50% / 45% 35% 65% 55%',
    },

    '&::after': {
      transform: 'translate3d(0, -5px, 0)',
    },
  },
});

export default BlobButton;
