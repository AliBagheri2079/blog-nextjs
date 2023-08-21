import {
  GithubLink,
  InstagramLink,
  LinkedinLink,
  TwitterLink,
} from './components';

const SocialMediaLinks = () => {
  return (
    <div className='col-span-6 row-span-1 row-start-6 md:col-span-1 md:col-start-1 md:row-span-5 md:row-start-2'>
      <div className='flex h-full items-center justify-evenly gap-10 md:flex-col md:items-start md:justify-center'>
        <InstagramLink />
        <LinkedinLink />
        <TwitterLink />
        <GithubLink />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
