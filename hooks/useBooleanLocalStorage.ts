import { useState, useEffect } from 'react';

export default function useBooleanLocalStorage(key: string, initialValue: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  // Verificamos si el valor ya existe en localStorage, de lo contrario usamos el valor inicial
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<boolean>(storedValue !== null ? JSON.parse(storedValue) : initialValue);

  // Actualizamos el localStorage cada vez que el valor cambia
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}