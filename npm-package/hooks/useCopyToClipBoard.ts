//

import { useState } from "react";

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
