//

import { useEffect, useState } from "react";

/**
 * this hook can be used to track the key events to perform certain actions.
 *
 * For instance:
 *
 * - when user press the "/", you want to open the searchBar
 * - when user press the "Escape", you want to discard changes
 *
 * @param targetKey the Key values for keyboard events. see the full list of key values [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
 *
 * @returns returns the boolean value which indicates if the desired key is pressed or not
 */

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
