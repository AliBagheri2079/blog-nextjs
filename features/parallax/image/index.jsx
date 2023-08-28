import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FlexCenter } from '@/components/structure';
import { StrokeText } from '@/components/text';

const ParallaxImage = ({ image, title }) => {
  const elemRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: elemRef });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 500]);

  return (
    <FlexCenter
      className='full-height relative snap-center snap-always'
      style={{ perspective: '500px' }}
    >
      <div ref={elemRef} className='h-1/2 w-4/5 max-w-xl overflow-hidden'>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={image}
            fill
            placeholder='blur'
            className='object-contain'
            alt={title}
          />
        </AspectRatio>
      </div>

      <motion.div
        className='absolute right-[10%] max-w-md text-center'
        style={{ y }}
      >
        <StrokeText as='h2' className='text-2xl capitalize md:text-6xl'>
          {title}
        </StrokeText>
      </motion.div>
    </FlexCenter>
  );
};

ParallaxImage.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default ParallaxImage;
