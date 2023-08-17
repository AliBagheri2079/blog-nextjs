import localFont from 'next/font/local';

const avineo = localFont({
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
  variable: '--font-avineo',
  display: 'swap',
});

export default avineo;
