import { motion } from 'framer-motion';

import variants from '../variants';
import {
  GithubLink,
  InstagramLink,
  LinkedinLink,
  TwitterLink,
} from './components';
import { FlexCenter } from '@/components/structure';

const MotionComponent = motion(FlexCenter);

const SocialMediaLinks = () => {
  return (
    <div className='col-span-6 row-span-1 row-start-6 md:col-span-1 md:col-start-1 md:row-span-5 md:row-start-2'>
      <MotionComponent
        initial='hide'
        animate='show'
        exit='hide'
        variants={variants.horizontal}
        className='h-full gap-10 max-md:!justify-evenly md:flex-col md:!items-start'
      >
        <InstagramLink />
        <LinkedinLink />
        <TwitterLink />
        <GithubLink />
      </MotionComponent>
    </div>
  );
};

export default SocialMediaLinks;
