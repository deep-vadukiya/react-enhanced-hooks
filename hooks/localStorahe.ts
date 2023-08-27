//

import { useState } from "react";

// 1. hook for localStorage
export default function useLocalStorage(key: string, initialValue: string) {
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
