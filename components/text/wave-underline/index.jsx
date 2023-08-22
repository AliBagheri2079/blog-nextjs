import PropTypes from 'prop-types';

import Text from './index.styled';
import Svg from '@/components/svg';

const WaveUnderlineText = ({ children }) => {
  return (
    <Text>
      <span className='text-primary'>{children}</span>

      <Svg
        className='wave-icon wave-icon--position'
        fill='none'
        viewBox='0 0 100 10'
      >
        <Svg.Child
          name='Path'
          d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294'
          pathLength='1'
        />
      </Svg>
    </Text>
  );
};

WaveUnderlineText.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default WaveUnderlineText;
