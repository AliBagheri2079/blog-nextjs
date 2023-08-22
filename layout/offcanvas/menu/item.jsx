import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { randomId } from '@/utils/helpers';
import { RevealText } from '@/components/text';
import { Underline } from '@/components/icon';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ text, url }) => {
  return (
    <motion.li
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
      style={{
        marginBlock: '2.5rem',
      }}
    >
      <Link
        href={url ?? '/not-found'}
        className='reveal-wrapper underline-wrapper'
        style={{
          position: 'relative',
          display: 'inline-flex',
          overflow: 'hidden',
          fontSize: 'clamp(1rem, 1rem + 5vw, 5rem)',
        }}
      >
        {text.split('').map((value, index) => (
          <RevealText key={randomId()} value={value} index={index} />
        ))}

        <Underline />
      </Link>
    </motion.li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default MenuItem;
