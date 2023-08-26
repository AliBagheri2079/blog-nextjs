import { ParallaxProgress, ParallaxText } from '@/features/parallax';

const TitleSlides = () => {
  return (
    <section className='sticky inset-x-0 top-0 z-10'>
      <div className='bg-primary/90 p-2 font-monument_ultrabold'>
        <ParallaxText baseVelocity={-5}>Just for fun</ParallaxText>
        <ParallaxText baseVelocity={5}>Animate on scroll</ParallaxText>
      </div>
      <ParallaxProgress />
    </section>
  );
};

export default TitleSlides;
