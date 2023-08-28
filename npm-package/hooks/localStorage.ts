//

import { useState } from "react";

// 1. hook for localStorage

/**
 * regular comment goes here ...
 * @param {string} type pass the key name to store the localStorage
 * @param {string} args this is the arg message
 */

interface objectInterface {
  id: number;
  title: string;
}

export default function useLocalStorage(
  key: string,
  initialValue: string | number | objectInterface[] | objectInterface
) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  const setStoredValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}
