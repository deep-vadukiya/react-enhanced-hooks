//

import { useState, useEffect, useRef } from "react";

/**
 * Attach the HTML reference to the ref to the element you want to track for hover events. Use the isHovered value in your component to display whether the element is currently being hovered over.
 *
 * Refer official doc [useHover](https://github.com/deeppatel06/react-enhanced-hooks#3-useHover) for more information.
 *
 * @returns [ref, isHovered]
 * ref - a ref to attach to the HTML element.
 * isHovered - boolean value if hovers or not.
 */

export default function useHover(): any[] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return [ref, isHovered];
}
