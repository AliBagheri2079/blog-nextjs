import { FlexCenter } from '@/components/structure';
import { WaveUnderlineText } from '@/components/text';

const MainTitle = () => {
  return (
    <div className='col-span-6 row-span-3 row-start-3 md:col-span-4 md:col-start-2 md:row-span-5 md:row-start-2'>
      <FlexCenter className='h-full'>
        <h1 className='line-clamp-6 max-w-md text-center font-monument_ultrabold text-5xl capitalize !leading-tight tracking-tight md:max-w-2xl md:text-7xl lg:text-8xl'>
          making <WaveUnderlineText>good</WaveUnderlineText> shit since 2022
        </h1>
      </FlexCenter>
    </div>
  );
};

export default MainTitle;
