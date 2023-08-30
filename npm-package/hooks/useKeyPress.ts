//

import { useEffect, useState } from "react";

export default function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleKeyDown = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const handleKeyUp = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return keyPressed;
}
