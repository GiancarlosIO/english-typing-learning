import { useEffect, useState } from 'react';

const useKey = (handler: (key: string) => void): string | undefined => {
  const [key, setKey] = useState<string | undefined>(undefined);
  useEffect(() => {
    const innerHandler = (event: KeyboardEvent) => {
      const { key, location } = event;

      const parsedKey = location > 0 ? `${key}${location}` : key;

      handler(parsedKey);
      setKey(parsedKey);
    };

    window.addEventListener('keydown', innerHandler);

    return () => {
      window.removeEventListener('keydown', innerHandler);
    };
  }, [handler]);

  return key;
};

export default useKey;
