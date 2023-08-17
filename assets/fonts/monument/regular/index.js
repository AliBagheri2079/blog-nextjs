import localFont from 'next/font/local';

const monument_regular = localFont({
  src: [
    {
      path: './index.woff2',
    },
    {
      path: './index.woff',
    },
    {
      path: './index.ttf',
    },
  ],
  weight: 'normal',
  style: 'normal',
  variable: '--font-monument-regular',
  display: 'swap',
});

export default monument_regular;
