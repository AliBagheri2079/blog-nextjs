import PropTypes from 'prop-types';

import Text from './index.styled';
import { randomId } from '@/utils/helpers';

/**
  NOTE: Should add this component inside a component that have a 'reveal-wrapper' class
 */
const RevealText = ({ text }) => {
  return text.split('').map((value, index) => (
    <Text key={randomId()}>
      <span style={{ transitionDelay: `${index * 50}ms` }}>{value}</span>
      <span style={{ transitionDelay: `${index * 50}ms` }}>{value}</span>
    </Text>
  ));
};

RevealText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RevealText;
