import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import OffcanvasBackdrop from '../backdrop';
import OffcanvasMenu from '../menu';
import { SheetContent } from '@/components/ui/sheet';

const OffcanvasNavbar = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <SheetContent className='w-full border-none bg-transparent data-[state=closed]:duration-2000 sm:max-w-full'>
          <nav>
            <OffcanvasBackdrop />
            <OffcanvasMenu />
          </nav>
        </SheetContent>
      )}
    </AnimatePresence>
  );
};

OffcanvasNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default OffcanvasNavbar;
