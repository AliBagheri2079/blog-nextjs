import Header from '@/layout/header';
import HomochiralThree from '@/features/three/homochiral';

const Home = () => {
  return (
    <>
      <HomochiralThree />
      <Header />

      <main className='container h-screen min-h-screen bg-primary-foreground/10'>
        <section>main content</section>
      </main>
    </>
  );
};

export default Home;
