# react-enhanced-hooks

A collection of useful custom hooks for React web applications.

## Installation

You can install this package using npm:

```bash
npm i react-enhanced-hooks
```

## Usage

### 1. useLocalStorage

A hook to easily manage local storage values.

```
import React from 'react';
import { useLocalStorage } from 'react-enhanced-hooks';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  // const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default App;
```

### 2. useOnlineStatus

A hook to monitor the user's online/offline status.

```
import React from 'react';
import { useOnlineStatus } from 'react-enhanced-hooks';

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>You are currently {isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}

export default App;
```

### 3. useHover

A useHover hook designed to help you detect whether an element is being hovered over. It returns a ref that you can attach to the element you want to track for hover events, and a boolean value indicating whether that element is currently being hovered over.

```
import React from 'react';
import { useHover } from 'react-enhanced-hooks';

function App() {
  const [elementRef, isHovered] = useHover();

  return (
    <div ref={elementRef}>
      <p>{isHovered ? "Hover over element" : "Hover to check"}</p>
    </div>
  );
}

export default App;
```

### 4. useOffSetTop

A useOffSetTop hook can be use to check the scrolled pixel of the current page.
For instance to update styling of the header when user scrolls the few pixels.

```
import React from 'react';
import useOffSetTop from 'react-enhanced-hooks';

function MyComponent() {
  const isScrolled = useOffSetTop(200); // default value: 100

  return (
    <div>
      {isScrolled ? <p>Scrolled</p> : <p>Not Scrolled Yet</p>}
    </div>
  );
}

export default MyComponent;
```

### 5. useKeyPress

A useKeyPress hook can be use to track the keyboards key events.
Hers is the official documentation from MDN for [Key values for keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).

```
import React from 'react';
import useOffSetTop from 'react-enhanced-hooks';

function MyComponent() {
  const isEscapePressed = useKeyPress('Escape');

  return (
    <div>
      <p>{isEscapePressed ? 'Escape key pressed' : 'Escape key not pressed'}</p>
    </div>
  );
}

export default MyComponent;
```

### 6. useDocumentTitle

A useDocumentTitle hook can be use to update the title of current document page.
pass the any string value which will be updated as a title of this page.

```

import React, { useEffect } from "react";
import useDocumentTitle from "react-enhanced-hooks";

function MyComponent() {
  useEffect(() => {
    useDocumentTitle("Home Page");
  }, []);

  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

export default MyComponent;
```

### 7. useCopyToClipBoard

A useDocumentTitle hook can be use to copy the string value to the users clipBoard. this hook returns the object containing `isCopied` and `copyToClipBoard` which can be use to manage the copy status and string which needs to be copy.

```
import useCopyToClipBoard from "react-enhanced-hooks";

function MyComponent() {
  const { isCopied, copyToClipBoard } = useCopyToClipBoard();

  const handleCopy = () => {
    const tempString = "Dummy hello world!";
    copyToClipBoard(tempString);
  };

  return (
    <div>
      <button onClick={handleCopy}>{isCopied ? "Copied!" : "Copy"}</button>
    </div>
  );
}

export default MyComponent;
```
