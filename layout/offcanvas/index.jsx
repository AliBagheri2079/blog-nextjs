'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import OffcanvasBackdrop from './back-drop';
import OffcanvasMenu from './menu';
import OffcanvasToggle from './toggle';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(preState => !preState);

  return (
    <motion.nav
      layout
      initial={false}
      animate={isMenuOpen ? 'open' : 'closed'}
      className='absolute inset-0'
    >
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <OffcanvasBackdrop />
            <OffcanvasMenu />
          </>
        )}
      </AnimatePresence>

      <OffcanvasToggle toggle={() => toggleMenu()} />
    </motion.nav>
  );
};

export default Offcanvas;
