import { useEffect, useState } from 'react';

const useKey = (handler: (key: string) => void): string | undefined => {
  const [key, setKey] = useState<string | undefined>(undefined);
  useEffect(() => {
    const innerHandler = (event: KeyboardEvent) => {
      const { key } = event;
      handler(key);
      setKey(key);
    };

    window.addEventListener('keydown', innerHandler);

    return () => {
      window.removeEventListener('keydown', innerHandler);
    };
  }, [handler]);

  return key;
};

export default useKey;
