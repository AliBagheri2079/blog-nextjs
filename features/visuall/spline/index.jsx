import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Loading from './loading';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering
  loading: Loading,
});

const Spline = ({ scene }) => {
  return <DynamicSpline scene={scene} />;
};

Spline.propTypes = {
  scene: PropTypes.string.isRequired,
};

export default Spline;
