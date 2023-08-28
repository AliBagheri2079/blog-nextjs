import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { MagneticButton } from '@/components/button';

const LinkedinLink = () => {
  return (
    <MagneticButton className='py-2 hover:text-primary md:pe-8'>
      <Link href='https://www.linkedin.com/in/alibagheri2079/'>
        <Linkedin className='h-[clamp(1rem,1rem+0.8vw,3rem)] w-[clamp(1rem,1rem+0.8vw,3rem)] transition-all' />

        <span className='sr-only focus:not-sr-only'>linkedin link icon</span>
      </Link>
    </MagneticButton>
  );
};

export default LinkedinLink;
