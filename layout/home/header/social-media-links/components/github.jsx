import { useRef } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

import useFollowPointer from '@/hooks/use-follow-pointer';
import { FollowPointerButton } from '@/components/button';

const GithubLink = () => {
  const elemRef = useRef(null);
  const [point, handlePointerMove, handlePointerOut] =
    useFollowPointer(elemRef);

  return (
    <FollowPointerButton
      ref={elemRef}
      className='py-2 md:pe-8'
      point={point}
      handlePointerMove={handlePointerMove}
      handlePointerOut={handlePointerOut}
    >
      <Link href='https://github.com/AliBagheri2079/'>
        <Github className='h-[clamp(1rem,1rem+0.8vw,3rem)] w-[clamp(1rem,1rem+0.8vw,3rem)]' />

        <span className='sr-only focus:not-sr-only'>github link icon</span>
      </Link>
    </FollowPointerButton>
  );
};

export default GithubLink;
