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
