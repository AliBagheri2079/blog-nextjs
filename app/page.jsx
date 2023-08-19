import { HomochiralOverlay } from '@/layout/overlay';

const Home = () => {
  return (
    <>
      <HomochiralOverlay />

      <header>
        {/* <motion.header layout layoutRoot style={{ position: "sticky" }}>
  <motion.h1 layout />
</motion.header> */}

        {/* <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileHover={{
            rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
            transition: { duration: 0.5 },
          }}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='notification__icon'
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
          />
        </motion.svg> */}
      </header>

      <main className='container mt-96 min-h-screen '>
        {/* <h1>ali bagheri</h1> */}
      </main>
    </>
  );
};

export default Home;
