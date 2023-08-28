import { useRef } from 'react';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import PropTypes from 'prop-types';

import variants from '../variants';
import Style from './index.module.css';
import useTyped from '@/hooks/use-typed';
import { FlexCenter } from '@/components/structure';

const MotionComponent = motion(FlexCenter);

const VerticalTitle = ({ titles }) => {
  const titleElm = useRef(null);
  const options = {
    strings: titles,
    startDelay: 3,
    showCursor: true,
  };
  useTyped(titleElm, options);

  return (
    <div className='col-span-6 row-span-1 row-start-2 md:col-span-1 md:col-start-6 md:row-span-5 md:row-start-2'>
      <MotionComponent
        initial='hide'
        animate='show'
        exit='hide'
        variants={variants.vertical}
        className='h-full md:!justify-end'
      >
        <Balancer as='h5' className={Style.Title}>
          <span ref={titleElm} />
        </Balancer>
      </MotionComponent>
    </div>
  );
};

VerticalTitle.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VerticalTitle;
