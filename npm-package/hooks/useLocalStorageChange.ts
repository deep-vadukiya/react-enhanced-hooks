//

import { useState, useEffect } from "react";

export default function useLocalStorageChange(storageKey: string) {
  const [data, setData] = useState("");

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      //   console.log(event, storageKey);

      //   if (event?.key === storageKey) {
      //     setData(JSON.parse(event.newValue || ""));
      //   }

      if (storageKey) {
        setData(JSON.parse(window.localStorage.getItem(storageKey) || ""));
      }
    });

    return () => window.removeEventListener("storage", () => {});
  }, [storageKey]);

  return data;
}
