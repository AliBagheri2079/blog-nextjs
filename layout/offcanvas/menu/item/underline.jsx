import Svg from '@/components/svg';

const Underline = () => {
  return (
    <Svg
      className='pointer-events-none absolute left-0 top-0 fill-none stroke-primary/50 stroke-1 group-hover:-translate-x-2/3 group-hover:transform-gpu'
      width='300%'
      height='100%'
      viewBox='0 0 1200 60'
      preserveAspectRatio='none'
      style={{
        transition: 'transform 500ms cubic-bezier(0, 0.25, 0.5, 1) 500ms',
      }}
    >
      <Svg.Child
        name='Path'
        d='M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0'
      />
    </Svg>
  );
};

export default Underline;
