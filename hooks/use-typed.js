/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Typed from 'typed.js';

const useTyped = (element, options) => {
  React.useEffect(() => {
    const typed = new Typed(element?.current, options);

    return () => typed.destroy();
  }, []);
};

export default useTyped;
