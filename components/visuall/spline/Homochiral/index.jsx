'use client';
import dynamic from 'next/dynamic';
import Loading from './loading';
import { URL } from '@/utils/constant';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering
  loading: Loading,
});

const Homochiral = () => {
  return <DynamicSpline scene={URL.SPLINE.HOMOCHIRAL} />;
};

export default Homochiral;
