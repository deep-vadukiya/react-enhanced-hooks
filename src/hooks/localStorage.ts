//

import { useState } from "react";

/**
 * Accepts the pair of key and value pair.
 *
 * It supports strings, number, boolean or object
 *
 * ⚠️ Note that it will consider true/false as a boolean no matter if it's string or boolean
 */

export default function useLocalStorage(
  key: string,
  initialValue: string | number | any[] | any
): any[] {
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
