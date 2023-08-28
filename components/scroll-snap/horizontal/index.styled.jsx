import { stitches } from '@/lib/config/stitches.config';

const HorizontalScroll = stitches.styled('div', {
  scrollSnapType: 'x mandatory',
  overflowX: 'auto',

  '& > *': {
    size: '100px',
    scrollSnapAlign: 'center',
    scrollSnapStop: 'always',
  },
});

export default HorizontalScroll;
