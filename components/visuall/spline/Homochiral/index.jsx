'use client';
import dynamic from 'next/dynamic';
import { URL } from '@/utils/constant';
import { SplineLoading } from '@/components/layout/home';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering
  loading: SplineLoading,
});

const Homochiral = () => {
  return <DynamicSpline scene={URL.SPLINE_HOMOCHIRAL} />;
};

export default Homochiral;
