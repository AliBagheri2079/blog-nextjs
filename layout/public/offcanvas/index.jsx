'use client';
import { useState } from 'react';

import OffcanvasToggle from './toggle';
import OffcanvasNavbar from './navbar';
import { Sheet } from '@/components/ui/sheet';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet onOpenChange={status => setIsMenuOpen(status)}>
      <OffcanvasToggle />
      <OffcanvasNavbar isOpen={isMenuOpen} />
    </Sheet>
  );
};

export default Offcanvas;
