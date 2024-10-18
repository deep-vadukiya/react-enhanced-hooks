//

import { useEffect } from "react";

/**
 *
 * pass the document title as a string on different pages to update the current documents title
 *
 * @param title title string which needs to be displayed on the document's title
 */

export default function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
