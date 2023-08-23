'use client';
import { useState } from 'react';
import OffcanvasToggle from './toggle';
import OffcanvasNavbar from './navbar';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(preState => !preState);

  return (
    <>
      <OffcanvasNavbar isOpen={isMenuOpen} />
      <OffcanvasToggle toggle={() => toggleMenu()} />
    </>
  );
};

export default Offcanvas;
