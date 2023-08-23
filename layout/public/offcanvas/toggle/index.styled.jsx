import { stitches } from '@/lib/config/stitches.config';

export const Text = stitches.styled('span', {
  fontFamily: 'var(--font-avineo)',
  // mixBlendMode: 'screen',
  letterSpacing: '0.1em',

  fontSize: '0.875rem',
  lineHeight: '1.25rem',

  '@bp1': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },

  '@bp2': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  '@bp3': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
});
