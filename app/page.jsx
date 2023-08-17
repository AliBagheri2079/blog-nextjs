import Offcanvas from '@/components/layout/offcanvas';
import { HomochiralOverlay } from '@/components/layout/overlay';

const Home = () => {
  return (
    <>
      <HomochiralOverlay />
      <Offcanvas />

      <main className='container min-h-screen bg-primary/75'>
        <h1>ali bagheri</h1>
      </main>
    </>
  );
};

export default Home;
