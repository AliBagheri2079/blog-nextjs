import localFont from 'next/font/local';

const monument_ultrabold = localFont({
  src: [
    {
      path: './index.eot',
    },
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
  weight: 'bold',
  style: 'normal',
  variable: '--font-monument-ultrabold',
  display: 'swap',
});

export default monument_ultrabold;
