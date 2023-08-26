import Balancer from 'react-wrap-balancer';
import { stitches } from '@/lib/config/stitches.config';

const StrokeText = stitches.styled(Balancer, {
  WebkitTextFillColor: 'transparent',
  WebkitTextStroke: '1px currentcolor',
});

export default StrokeText;
