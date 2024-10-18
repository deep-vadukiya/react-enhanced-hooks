"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/hooks/localStorage.ts
var _react = require('react');
function useLocalStorage(key, initialValue) {
  const [value, setValue] = _react.useState.call(void 0, () => {
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

function useOnlineStatus() {
  const isSupported = typeof window !== "undefined" && "ononline" in window;
  const [online, setOnline] = _react.useState.call(void 0, isSupported ? navigator.onLine : true);
  _react.useEffect.call(void 0, () => {
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

function useHover() {
  const [isHovered, setIsHovered] = _react.useState.call(void 0, false);
  const ref = _react.useRef.call(void 0, null);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  _react.useEffect.call(void 0, () => {
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

function useOffSetTop(top) {
  const [offsetTop, setOffSetTop] = _react.useState.call(void 0, false);
  const isTop = top || 100;
  _react.useEffect.call(void 0, () => {
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

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = _react.useState.call(void 0, false);
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
  _react.useEffect.call(void 0, () => {
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

function useDocumentTitle(title) {
  _react.useEffect.call(void 0, () => {
    document.title = title;
  }, [title]);
}

// src/hooks/useCopyToClipBoard.ts

function useCopyToClipBoard() {
  const [isCopied, setIsCopied] = _react.useState.call(void 0, false);
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

function useTabFocusEffect(callback) {
  const [isTabFocused, setIsTabFocused] = _react.useState.call(void 0, true);
  const handleTabFocus = () => {
    if (callback) {
      callback();
    }
    setIsTabFocused(true);
  };
  const handleTabBlur = () => {
    setIsTabFocused(false);
  };
  _react.useEffect.call(void 0, () => {
    window.addEventListener("focus", handleTabFocus);
    window.addEventListener("blur", handleTabBlur);
    return () => {
      window.removeEventListener("focus", handleTabFocus);
      window.removeEventListener("blur", handleTabBlur);
    };
  }, [callback]);
  return isTabFocused;
}









exports.useCopyToClipBoard = useCopyToClipBoard; exports.useDocumentTitle = useDocumentTitle; exports.useHover = useHover; exports.useKeyPress = useKeyPress; exports.useLocalStorage = useLocalStorage; exports.useOffSetTop = useOffSetTop; exports.useOnlineStatus = useOnlineStatus; exports.useTabFocusEffect = useTabFocusEffect;
//# sourceMappingURL=index.js.map