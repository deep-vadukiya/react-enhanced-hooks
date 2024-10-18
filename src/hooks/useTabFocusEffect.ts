//

import { useEffect, useState } from "react";

/**
 * This hook can be used to check the browsers focused or blur events.
 *
 * For instance:
 *
 * 1. You want to call the API and hydrate the response data to the ui whenever user focuses to the browsers tab.
 * 2. You want to run the timer when user is focused on the browsers tab, when user blurs the browser tab you want timer to stop.
 *
 * this hook will return the boolean as per the browsers current state(focused or not).
 *
 * @param callback a callback function which will be called when the tab is gets focused
 * @returns boolean whether the tab is focused or not
 */

export default function useTabFocusEffect(callback: () => void): any {
  const [isTabFocused, setIsTabFocused] = useState<boolean>(true);

  const handleTabFocus = () => {
    if (callback) {
      callback();
    }
    setIsTabFocused(true);
  };

  const handleTabBlur = () => {
    setIsTabFocused(false);
  };

  useEffect(() => {
    window.addEventListener("focus", handleTabFocus);
    window.addEventListener("blur", handleTabBlur);

    return () => {
      window.removeEventListener("focus", handleTabFocus);
      window.removeEventListener("blur", handleTabBlur);
    };
  }, [callback]);

  return isTabFocused;
}
