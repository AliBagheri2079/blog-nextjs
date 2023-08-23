import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import OffcanvasBackdrop from '../back-drop';
import OffcanvasMenu from '../menu';
import { AbsoluteOverlay } from '@/components/overlay';

const OffcanvasNavbar = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <AbsoluteOverlay as='nav' css={{ zIndex: '$overlay' }}>
          <OffcanvasBackdrop />
          <OffcanvasMenu />
        </AbsoluteOverlay>
      )}
    </AnimatePresence>
  );
};

OffcanvasNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default OffcanvasNavbar;
