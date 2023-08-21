/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

const useFollowPointer = element => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(event => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();

      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const elmWidth = rect.width;
      const elmHeight = rect.height;

      const x = offsetX - elmWidth / 3;
      const y = offsetY - elmHeight / 3;
      setPoint({ x, y });
    }
  }, []);

  const handlePointerOut = useCallback(() => {
    if (element.current) {
      setPoint({ x: 0, y: 0 });
    }
  }, []);

  return [point, handlePointerMove, handlePointerOut];
};

export default useFollowPointer;
