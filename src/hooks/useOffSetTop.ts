//

import { useState, useEffect } from "react";

/**
 * this hook can be use to check if the page has scrolled desired pixels of not.
 *
 * ⚠️ Note: make sure if you don't pass any values to hook, it will consider 100 as a default value.
 *
 * @param top the number of pixels from top. if the page has scrolled that much pixels the hook will return true or else false
 *
 * @returns it will return boolean value if browser is scrolled that much pixels or not.
 */

export default function useOffSetTop(top: number): boolean {
  const [offsetTop, setOffSetTop] = useState(false);
  const isTop = top || 100;

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > isTop) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [isTop]);

  return offsetTop;
}
