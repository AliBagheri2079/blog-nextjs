import '@/styles/main.css';
import { avineo, monument_regular, monument_ultrabold } from '@/assets/fonts';
import { cn } from '@/lib/utils';
import { stitches } from '@/lib/config/stitches.config';
import { Offcanvas } from '@/layout/public';

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
        <Offcanvas />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
