'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import OffcanvasBackdrop from './back-drop';
import OffcanvasMenu from './menu';
import OffcanvasToggle from './toggle';
import { AbsoluteOverlay } from '@/components/overlay';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(preState => !preState);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <AbsoluteOverlay css={{ zIndex: '$overlay' }}>
            <OffcanvasBackdrop />
            <OffcanvasMenu />
          </AbsoluteOverlay>
        )}
      </AnimatePresence>
      <OffcanvasToggle toggle={() => toggleMenu()} />
    </>
  );
};

export default Offcanvas;
