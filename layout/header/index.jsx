'use client';
import BrandLogo from './brand-logo';
import MainTitle from './main-title';
import SocialMediaLinks from './social-media-links';
import VerticalTitle from './vertical-title';

const Header = () => {
  return (
    <header className='h-screen max-w-full supports-[height:100svh]:h-[100svh]'>
      <div className='grid h-full grid-cols-6 grid-rows-6 gap-4 px-8 py-6'>
        <BrandLogo />
        <SocialMediaLinks />
        <MainTitle />
        <VerticalTitle
          titles={[
            'These are the default values...',
            'You know what you should do?',
            'Use your own!',
            'Have a great day!',
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
