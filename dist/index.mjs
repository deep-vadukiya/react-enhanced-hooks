// src/hooks/localStorage.ts
import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setStoredValue];
}

// src/hooks/onlineStatus.ts
import { useState as useState2, useEffect } from "react";
function useOnlineStatus() {
  const isSupported = typeof window !== "undefined" && "ononline" in window;
  const [online, setOnline] = useState2(isSupported ? navigator.onLine : true);
  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return online;
}

// src/hooks/useHover.ts
import { useState as useState3, useEffect as useEffect2, useRef } from "react";
function useHover() {
  const [isHovered, setIsHovered] = useState3(false);
  const ref = useRef(null);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  useEffect2(() => {
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

// src/hooks/useOffSetTop.ts
import { useState as useState4, useEffect as useEffect3 } from "react";
function useOffSetTop(top) {
  const [offsetTop, setOffSetTop] = useState4(false);
  const isTop = top || 100;
  useEffect3(() => {
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

// src/hooks/useKeyPress.ts
import { useEffect as useEffect4, useState as useState5 } from "react";
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState5(false);
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
  useEffect4(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);
  return keyPressed;
}

// src/hooks/useDocumentTitle.ts
import { useEffect as useEffect5 } from "react";
function useDocumentTitle(title) {
  useEffect5(() => {
    document.title = title;
  }, [title]);
}

// src/hooks/useCopyToClipBoard.ts
import { useState as useState6 } from "react";
function useCopyToClipBoard() {
  const [isCopied, setIsCopied] = useState6(false);
  const copyToClipboard = (text) => {
    var _a;
    (_a = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2e3);
    });
  };
  return { isCopied, copyToClipboard };
}

// src/hooks/useTabFocusEffect.ts
import { useEffect as useEffect6, useState as useState7 } from "react";
function useTabFocusEffect(callback) {
  const [isTabFocused, setIsTabFocused] = useState7(true);
  const handleTabFocus = () => {
    if (callback) {
      callback();
    }
    setIsTabFocused(true);
  };
  const handleTabBlur = () => {
    setIsTabFocused(false);
  };
  useEffect6(() => {
    window.addEventListener("focus", handleTabFocus);
    window.addEventListener("blur", handleTabBlur);
    return () => {
      window.removeEventListener("focus", handleTabFocus);
      window.removeEventListener("blur", handleTabBlur);
    };
  }, [callback]);
  return isTabFocused;
}
export {
  useCopyToClipBoard,
  useDocumentTitle,
  useHover,
  useKeyPress,
  useLocalStorage,
  useOffSetTop,
  useOnlineStatus,
  useTabFocusEffect
};
//# sourceMappingURL=index.mjs.map