import { FixedOverlay } from '@/components/overlay';
import { stitches } from '@/lib/config/stitches.config';

export const Box = stitches.styled(FixedOverlay, {
  zIndex: `calc(${'$overlay'} * -1)`,
});

export const Container = stitches.styled('div', {
  size: '100%',
  py: '1rem',
});
