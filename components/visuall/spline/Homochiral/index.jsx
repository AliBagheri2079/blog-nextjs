'use client';
import dynamic from 'next/dynamic';
import { Box, Container } from './index.styled';
import Loading from './loading';
import { URL } from '@/utils/constant';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering
  loading: Loading,
});

const Homochiral = () => {
  return (
    <Box>
      <Container>
        <DynamicSpline scene={URL.SPLINE_HOMOCHIRAL} />
      </Container>
    </Box>
  );
};

export default Homochiral;
