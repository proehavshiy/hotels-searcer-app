import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;

  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    document.addEventListener('resize', handleResize);
    return () => document.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
