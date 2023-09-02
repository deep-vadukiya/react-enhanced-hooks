//

import { useState, useEffect, useRef } from "react";

function useTabFocusDelayEffect(
  effect: () => void,
  callOnMount: boolean = true,
  delayInSeconds: number = 0
) {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [isTabFocused, setIsTabFocused] = useState(true);
  const [shouldEffectOnFocus, setShouldEffectOnFocus] = useState(false);

  useEffect(() => {
    // 1. if should call on mount
    if (isTabFocused && !isComponentMounted && callOnMount) {
      console.log("== condition 1");
      setIsComponentMounted(true);
      effect();
    }

    // 2.
    if (isTabFocused && shouldEffectOnFocus) {
      console.log("== condition 2");
      clearTimeout(timerRef.current);
      setShouldEffectOnFocus(false);
      effect();
    }

    // 3. start timer when user blurs the window
    if (!isTabFocused) {
      console.log("== condition 3");
      timerRef.current = window.setTimeout(() => {
        console.log("== should load now, when focus");
        setShouldEffectOnFocus(true);
      }, delayInSeconds * 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isTabFocused]);

  useEffect(() => {
    const trackFocus = () => {
      window.addEventListener("focus", () => setIsTabFocused(true));
      window.addEventListener("blur", () => setIsTabFocused(false));
    };

    trackFocus();

    return () => {
      window.removeEventListener("focus", trackFocus);
      window.removeEventListener("blur", trackFocus);
    };
  }, []);
}

export default useTabFocusDelayEffect;

//////////////////
// 1. handle effect call on mount
// 2. start listening for focus and blur events
// 3. start timer when user blurs the current tab
// 4.

//////////////////
//

// const handleTabFocus = () => {
//     // Clear the existing timer
//     if (timerRef.current !== null) {
//       clearTimeout(timerRef.current);
//     }

//     // Set up a new timer to call the effect after the specified delay
//     if (delayInSeconds > 0) {
//       timerRef.current = window.setTimeout(() => {
//         effect();
//       }, delayInSeconds * 1000);
//     }
// };

//   useEffect(() => {
//     // Check if we should call the effect on mount
//     if (callOnMount) {
//       effect();
//     }

//     // Set up a listener to handle tab focus
//     window.addEventListener("focus", handleTabFocus);

//     // Clear the timer when the component unmounts
//     return () => {
//       if (timerRef.current !== null) {
//         clearTimeout(timerRef.current);
//       }
//       window.removeEventListener("focus", handleTabFocus);
//     };
//   }, [effect, callOnMount, delayInSeconds]);
