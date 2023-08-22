import { stitches } from '@/lib/config/stitches.config';

const Text = stitches.styled('span', {
  pos: 'relative',
  isolation: 'isolate',
  display: 'inline-block',

  '& :where(.wave-icon)': {
    size: '100%',
    stroke: 'hsl(var(--foreground) / 0.75)',
    strokeWidth: 1,
    pointerEvents: 'none',
  },

  '& > .wave-icon--position': {
    pos: 'absolute',
    inset: '40% auto 0 0',
    zIndex: -1,
  },
});

export default Text;
