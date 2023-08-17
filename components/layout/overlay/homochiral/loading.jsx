import { Loader } from 'lucide-react';
import { Box, FlexCenter } from './index.styled';

const HomochiralLoading = () => {
  return (
    <Box>
      <FlexCenter>
        <Loader className='mr-3 h-5 w-5 animate-spin' />
        <span className='text-sm text-muted-foreground'>Processing...</span>
      </FlexCenter>
    </Box>
  );
};

export default HomochiralLoading;
