import { Loader } from 'lucide-react';
import { Box, Container, FlexCenter } from './index.styled';

const Loading = () => {
  return (
    <Box>
      <Container>
        <FlexCenter>
          <Loader className='mr-3 h-5 w-5 animate-spin' />
          <span className='text-sm text-muted-foreground'>Processing...</span>
        </FlexCenter>
      </Container>
    </Box>
  );
};

export default Loading;
