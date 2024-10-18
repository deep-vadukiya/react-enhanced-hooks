//

import { useState } from "react";

/**
 *
 * This hook can be used to copy the any string value to users clipboard.
 *
 * isCopied(boolean): returns if the value is copied to clipboard.
 *
 * copyToClipboard(method): takes the string value and copies it to clipboard.
 *
 * @returns returns the object with the properties of copy status and function which can be used to pass the string values which need to be copy.
 */

export default function useCopyToClipBoard(): any {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator?.clipboard?.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return { isCopied, copyToClipboard };
}
