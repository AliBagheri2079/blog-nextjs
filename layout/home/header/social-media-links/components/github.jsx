import Link from 'next/link';
import { Github } from 'lucide-react';
import { MagneticButton } from '@/components/button';

const GithubLink = () => {
  return (
    <MagneticButton className='py-2 hover:text-primary md:pe-8'>
      <Link href='https://github.com/AliBagheri2079/'>
        <Github className='h-[clamp(1rem,1rem+0.8vw,3rem)] w-[clamp(1rem,1rem+0.8vw,3rem)] transition-all' />

        <span className='sr-only focus:not-sr-only'>github link icon</span>
      </Link>
    </MagneticButton>
  );
};

export default GithubLink;
