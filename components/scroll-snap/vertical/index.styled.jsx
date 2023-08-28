import { stitches } from '@/lib/config/stitches.config';

const VerticalScroll = stitches.styled('div', {
  scrollSnapType: 'y mandatory',
  overflowY: 'auto',

  '& > *': {
    size: '100px',
    scrollSnapAlign: 'center',
    scrollSnapStop: 'always',
  },
});

export default VerticalScroll;
