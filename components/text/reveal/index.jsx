import PropTypes from 'prop-types';
import Text from './index.styled';

/**
  NOTE: Should add this component inside a component that have a 'reveal-wrapper' class
 */
const RevealText = ({ value, index }) => {
  return (
    <Text>
      <span style={{ transitionDelay: `${index * 50}ms` }}>{value}</span>
      <span style={{ transitionDelay: `${index * 50}ms` }}>{value}</span>
    </Text>
  );
};

RevealText.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default RevealText;
