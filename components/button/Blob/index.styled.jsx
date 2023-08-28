import { stitches } from '@/lib/config/stitches.config';
import { Button } from '@/components/ui/button.jsx';

const borderTransform = stitches.keyframes({
  '0%, 100%': {
    br: '35% 65% 37% 63% / 35% 72% 28% 65%',
  },
  '33%': {
    br: '72% 28% 48% 48% / 28% 28% 72% 72%',
  },
  '66%': {
    br: '100% 56% 56% 100% / 100% 100% 56% 56%',
  },
});

const BlobButton = stitches.styled(Button, {
  pos: 'relative',
  height: 'unset',
  width: 'calc(5rem + 5vw)',
  aspectRatio: '5 / 3',

  '&::before, &::after': {
    content: '',
    pos: 'absolute',
    left: 0,
    size: '100%',
  },

  '&::before': {
    top: 0,
    zIndex: -1,
    overflow: 'hidden',
    animation: `${borderTransform} 8s linear infinite`,
  },

  '&::after': {
    top: '10%',
    zIndex: -2,
    borderStyle: 'solid',
    borderWidth: '1px',
    br: '60% 40% 55% 45% / 55% 45% 55% 45%',
    transform: 'rotate(-20deg)',
    transition: 'transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55)',
  },

  '&:hover': {
    bg: 'unset',
    color: 'unset',

    '&::before': {
      animationIterationCount: 0,
      br: '60% 40% 50% 50% / 45% 35% 65% 55%',
    },

    '&::after': {
      transform: 'translate3d(0, -5px, 0)',
    },
  },
});

export default BlobButton;
