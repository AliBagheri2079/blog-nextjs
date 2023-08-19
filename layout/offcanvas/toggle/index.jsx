import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { BlobButton } from '@/components/button';

const OffcanvasToggle = ({ toggle }) => {
  return (
    <motion.div
      layout
      drag
      dragConstraints={{
        top: -20,
        right: 0,
        left: -50,
        bottom: 50,
      }}
      dragElastic={0.3}
      className='absolute right-0 top-0 me-6 mt-6'
    >
      <BlobButton
        variant='ghost'
        className='before:bg-primary after:border-primary-foreground'
        onClick={toggle}
      >
        <span className='font-avineo text-sm tracking-widest mix-blend-screen sm:text-xl md:text-2xl lg:text-3xl'>
          Menu
        </span>
      </BlobButton>
    </motion.div>
  );
};

OffcanvasToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default OffcanvasToggle;
