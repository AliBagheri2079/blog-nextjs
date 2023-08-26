import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import OffcanvasBackdrop from '../back-drop';
import OffcanvasMenu from '../menu';
import { SheetContent } from '@/components/ui/sheet';

const OffcanvasNavbar = ({ isOpen }) => {
  return (
    <SheetContent className='w-full border-none bg-transparent data-[state=closed]:duration-2000 sm:max-w-full'>
      <AnimatePresence>
        {isOpen && (
          <nav>
            <OffcanvasBackdrop />
            <OffcanvasMenu />
          </nav>
        )}
      </AnimatePresence>
    </SheetContent>
  );
};

OffcanvasNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default OffcanvasNavbar;
