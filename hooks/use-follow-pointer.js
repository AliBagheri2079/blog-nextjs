/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

const useFollowPointer = element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(event => {
    const { clientX, clientY } = event;
    const { width, height, left, top } =
      element?.current.getBoundingClientRect();

    const x = clientX - (left + width / 3);
    const y = clientY - (top + height / 3);
    setPosition({ x, y });
  }, []);

  const handlePointerOut = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return [position, handlePointerMove, handlePointerOut];
};

export default useFollowPointer;
