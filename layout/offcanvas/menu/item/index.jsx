import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './title';
import Underline from './underline';
import { randomId } from '@/utils/helpers/random-id';

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
      className='my-10'
    >
      <Link
        href={url ?? '/not-found'}
        className='group relative flex overflow-hidden'
        style={{ fontSize: 'clamp(1rem, 1rem + 5vw, 5rem)' }}
      >
        {text.split('').map((value, index) => (
          <Title key={randomId()} value={value} index={index} />
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
