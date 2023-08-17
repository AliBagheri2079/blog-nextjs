import '@/styles/main.css';
import { avineo, monument_regular, monument_ultrabold } from '@/assets/fonts';
import { cn } from '@/lib/utils';
import { stitches } from '@/lib/config/stitches.config';

export const metadata = {
  title: 'Next.js Blog',
  description: 'Story telling about nothing...',
};

function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`${avineo.variable} ${monument_regular.variable} ${monument_ultrabold.variable}`}
    >
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: stitches.getCssText() }}
        />
      </head>
      <body
        className={cn(
          'bg-background text-foreground selection:bg-primary selection:text-primary-foreground',
          monument_regular.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
