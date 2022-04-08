import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationonChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationonChange);

    return () => {
      window.removeEventListener('popstate', onLocationonChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
