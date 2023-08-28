import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { MagneticButton } from '@/components/button';

const InstagramLink = () => {
  return (
    <MagneticButton className='py-2 hover:text-primary md:pe-8'>
      <Link href='https://www.instagram.com/alibagheri2079/'>
        <Instagram className='h-[clamp(1rem,1rem+0.8vw,3rem)] w-[clamp(1rem,1rem+0.8vw,3rem)] transition-all' />

        <span className='sr-only focus:not-sr-only'>instagram link icon</span>
      </Link>
    </MagneticButton>
  );
};

export default InstagramLink;
