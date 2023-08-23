import { HomochiralThree as Overlay } from '@/features/three';
import { Content, Header } from '@/layout/home';

const Home = () => {
  return (
    <>
      <Overlay />
      <Header />

      <main className='container h-screen min-h-screen bg-primary-foreground/10'>
        <section>main content</section>
      </main>
    </>
  );
};

export default Home;
