//

import { useState, useEffect } from "react";

/**
 * This hooks will return the boolean value as per user's internet availability.
 *
 * It uses Navigator online API to define whether browser has active internet connection or not.
 *
 * ⚠️ Note: If the browser doesn't support navigator.online it will return true by default.
 *
 * @returns boolean value which represents if the internet is available or not
 */

export default function useOnlineStatus() {
  const isSupported = typeof window !== "undefined" && "ononline" in window;
  const [online, setOnline] = useState(isSupported ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}
