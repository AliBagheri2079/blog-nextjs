import PropTypes from 'prop-types';

const Title = ({ value, index }) => {
  return (
    <span className='relative first:capitalize'>
      <span
        className='inline-flex duration-500 group-hover:-translate-y-full'
        style={{ transitionDelay: `${index * 25}ms` }}
      >
        {value}
      </span>
      <span
        className='absolute left-0 translate-y-full text-primary duration-500 group-hover:translate-y-0'
        style={{ transitionDelay: `${index * 25}ms` }}
      >
        {value}
      </span>
    </span>
  );
};

Title.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default Title;
