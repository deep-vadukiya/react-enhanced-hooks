//

import { useEffect, useState } from "react";

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
