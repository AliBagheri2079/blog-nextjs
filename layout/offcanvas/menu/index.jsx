import { motion } from 'framer-motion';
import MenuItem from './item';
import { menuItems } from '@/data/menu-items';
import { AbsoluteOverlay } from '@/components/overlay';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.8 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const OffcanvasMenu = () => (
  <motion.nav
    layout
    initial={false}
    style={{
      marginBlockStart: '6rem',
      padding: '1.5rem 3rem',
    }}
    className={AbsoluteOverlay.className}
  >
    <motion.ul
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
    >
      {menuItems.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </motion.ul>
  </motion.nav>
);

export default OffcanvasMenu;
