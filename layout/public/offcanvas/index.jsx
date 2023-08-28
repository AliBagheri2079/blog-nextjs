'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import OffcanvasToggle from './toggle';
import OffcanvasNavbar from './navbar';
import { Sheet } from '@/components/ui/sheet';

const Offcanvas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (currentPath.current !== pathname) {
      currentPath.current = pathname;
      setIsMenuOpen(false);
    }

    return () => (currentPath.current = null);
  }, [pathname]);

  return (
    <Sheet onOpenChange={status => setIsMenuOpen(status)}>
      <OffcanvasToggle />
      <OffcanvasNavbar isOpen={isMenuOpen} />
    </Sheet>
  );
};

export default Offcanvas;
