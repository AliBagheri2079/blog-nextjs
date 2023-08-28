import { Content, Header, Backdrop } from '@/layout/home';

export const metadata = {
  title: 'Home | Blog',
  description: 'Story telling about nothing...',
};

const Home = () => {
  return (
    <>
      <Backdrop />
      <Header />
      <Content />
    </>
  );
};

export default Home;
