import { stitches } from '@/lib/config/stitches.config';

const Text = stitches.styled('span', {
  pos: 'relative',

  '&:first-of-type': {
    textTransform: 'capitalize',
  },

  '& > span': {
    transitionDuration: '500ms',

    '&:first-child': {
      display: 'inline-flex',
    },

    '&:last-child': {
      color: 'hsl(var(--primary))',
      pos: 'absolute',
      left: 0,
      transform: 'translateY(100%)',
    },
  },

  '.reveal-wrapper:hover &': {
    '& > span': {
      '&:first-child': {
        transform: 'translateY(-100%)',
      },

      '&:last-child': {
        transform: 'translateY(0)',
      },
    },
  },
});

export default Text;
