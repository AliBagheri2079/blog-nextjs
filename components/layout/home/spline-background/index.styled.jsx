import { stitches } from '@/lib/config/stitches.config';

export const Box = stitches.styled('div', {
  pos: 'fixed',
  inset: '0',
  zIndex: `calc(${'$overlay'} * -1)`,
});

export const Container = stitches.styled('div', {
  size: '100%',
  py: '1rem',
});

export const FlexCenter = stitches.styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});
