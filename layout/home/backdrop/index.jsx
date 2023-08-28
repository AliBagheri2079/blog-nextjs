'use client';
import { Box, Container } from './index.styled';
import Spline from '@/features/visuall/spline';
import { URL } from '@/utils/constant';

const Backdrop = () => {
  return (
    <Box style={{ backgroundImage: 'url(/images/stars.png)' }}>
      <Container>
        <Spline scene={URL.SPLINE.RETRO_GLASS_MATERIAL} />
      </Container>
    </Box>
  );
};

export default Backdrop;
