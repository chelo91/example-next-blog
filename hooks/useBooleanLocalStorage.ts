import { useState, useEffect } from 'react';

export default function useBooleanLocalStorage(key: string, initialValue: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {

  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<boolean>(storedValue !== null ? JSON.parse(storedValue) : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}