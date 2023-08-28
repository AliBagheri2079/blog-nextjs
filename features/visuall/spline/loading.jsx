import { Loader } from 'lucide-react';
import { FixedOverlay } from '@/components/overlay';
import { FlexCenter } from '@/components/structure';

const Loading = () => {
  return (
    <FixedOverlay
      css={{
        zIndex: `calc(${'$overlay'} * -1)`,
      }}
    >
      <FlexCenter
        css={{
          minHeight: '100vh',
        }}
      >
        <Loader className='mr-3 h-5 w-5 animate-spin' />
        <span className='text-sm text-muted-foreground'>Processing...</span>
      </FlexCenter>
    </FixedOverlay>
  );
};

export default Loading;
