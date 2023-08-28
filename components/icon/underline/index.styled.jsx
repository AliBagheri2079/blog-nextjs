import { stitches } from '@/lib/config/stitches.config';

const Icon = stitches.styled('svg', {
  pos: 'absolute',
  top: 0,
  left: 0,

  fill: 'none',
  stroke: 'hsl(var(--primary) / 0.5)',
  strokeWidth: '1px',
  pointerEvents: 'none',
  transition: 'transform 500ms cubic-bezier(0, 0.25, 0.5, 1) 500ms',

  '.underline-wrapper:hover &': {
    transform: 'translate3d(-66.6%, 0, 0)',
  },
});

export default Icon;
