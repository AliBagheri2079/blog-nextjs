'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import OffcanvasBackdrop from './back-drop';
import OffcanvasMenu from './menu';
import OffcanvasToggle from './toggle';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(preState => !preState);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <OffcanvasBackdrop />
            <OffcanvasMenu />
          </>
        )}
      </AnimatePresence>
      <OffcanvasToggle toggle={() => toggleMenu()} />
    </>
  );
};

export default Offcanvas;
