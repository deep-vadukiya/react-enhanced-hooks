//

import { useEffect, useState } from "react";
// typescript interface for keyboard events
import { KeyValues } from "../utils/keyValueList";

/**
 * this hook can be used to track the key combination events to perform certain actions.
 *
 * For instance:
 *
 * - when user press the "/" along with Command if user is on Mac or Ctrl if on any other OS, you want to open the searchBar
 * - when user press the "Escape" along with Command if user is on Mac or Ctrl if on any other OS, you want to discard changes
 *
 * @param targetKey the Key values for keyboard events. see the full list of key values [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
 *
 * @returns returns the boolean value which indicates if the desired key is pressed or not
 */

function useKeyCombination(key1: keyof KeyValues): boolean {
  const [isCombinationPressed, setIsCombinationPressed] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    let isMac = false;
    if (navigator?.userAgent?.indexOf("Mac OS X") != -1) isMac = true;

    const controlKey = isMac ? event.metaKey : event.ctrlKey;

    if (controlKey && event.key === key1) {
      setIsCombinationPressed(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setIsCombinationPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key1]);

  return isCombinationPressed;
}

export default useKeyCombination;
