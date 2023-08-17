'use client';
import dynamic from 'next/dynamic';
import { URL } from '@/utils/constant';
import { HomochiralLoading } from '@/components/layout/overlay';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering
  loading: HomochiralLoading,
});

const Homochiral = () => {
  return <DynamicSpline scene={URL.SPLINE_HOMOCHIRAL} />;
};

export default Homochiral;
