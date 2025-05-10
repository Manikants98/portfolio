## React Useful Custom Hooks

<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding:10px 0px;" >
  <img src="https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue" alt="Author" />
  <img src="https://img.shields.io/npm/v/react-mkx-toolkit?color=1C939D" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/react-mkx-toolkit" alt="npm downloads" />
  <img src="https://img.shields.io/npm/l/react-mkx-toolkit" alt="license" />
  <img src="https://img.shields.io/npm/unpacked-size/react-mkx-toolkit" alt="size" />
</div>

## Description

React Custom Hooks provide an efficient means to encapsulate and share logic among components within React applications.
This package includes useful React custom hooks.

## Table of Contents

- [Installation](#installation)
- [Browser Support](#browser-support)
- [useKeyboard](#usekeyboard)
- [useRandomArray](#userandomarray)
- [useCurrentLocation](#usecurrentlocation)
- [useScroll](#usescroll)
- [useNotification](#usenotification)
- [useOnlineStatus](#useonlinestatus)
- [useWindowSize](#usewindowsize)
- [useDebounce](#usedebounce)
- [License](#license)

## Installation

You can install the package using npm:

```shell
npm install react-mkx-toolkit
```

Or using yarn:

```shell
yarn add react-mkx-toolkit
```

## useKeyboard

The `useKeyboard` hook is a custom React hook designed to simplify the handling of keyboard events within your React applications. With this hook, you can easily listen for specific keyboard inputs and execute callback functions in response to those inputs.

## Usage

```jsx
import { useKeyboard } from 'react-mkx-toolkit';

const MyComponent = () => {
  const handleKeyPress = () => {
    console.log('The Enter key was pressed!');
  };

  useKeyboard('Enter', handleKeyPress);
  return <>MyComponent</>;
};
export default MyComponent;
```

## useRandomArray

The `useRandomArray` hook is useful for scenarios where you need to generate a sequence of numbers within a specified range,
such as creating test data, generating random values, or iterating through a range of numerical values.

## Usage

```jsx
import { useRandomArray } from 'react-mkx-toolkit';

const MyComponent = () => {
  const arr = useRandomArray(0, 10);
  //Output : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  return <>MyComponent</>;
};
export default MyComponent;
```

## useCurrentLocation

The `useCurrentLocation` hook to retrieve the current geographic location of the user. This hook is useful for scenarios where you need to access the user's current location for various purposes such as location-based services, mapping applications, or any feature requiring the user's geographical coordinates.

## Usage

```jsx
import { useCurrentLocation } from 'react-mkx-toolkit';

const MyComponent = () => {
  const { display_name, address, latitude, longitude } = useCurrentLocation();

  return (
    <div>
      <p>
        <span>Display Name : </span>
        <span>{display_name}</span>
      </p>
      <p>
        <span>Latitude : </span>
        <span>{latitude}</span>
      </p>
      <p>
        <span>Longitude : </span>
        <span>{longitude}</span>
      </p>
      <p>
        <span>Address : </span>
        <span>{JSON.stringify(address)}</span>
      </p>
    </div>
  );
};
export default MyComponent;
```

## useScroll

The `useScroll` hook is a custom React hook designed to provide a set of utilities for scrolling within a web application. Its main purpose is to encapsulate common scrolling functionality, making it easier to manage and reuse scrolling behavior across different components.

## Usage

```jsx
import React from 'react';
import { useScroll } from 'react-mkx-toolkit';

function ScrollComponent() {
  const { scrollToTop, scrollToBottom, scrollById } = useScroll();

  const handleScrollToTop = () => {
    scrollToTop();
  };

  const handleScrollToBottom = () => {
    scrollToBottom();
  };

  const handleScrollById = () => {
    scrollById('myElementId', {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <button onClick={handleScrollById}>Scroll to Element with ID</button>
      <div id="myElementId">Element to scroll to</div>
    </div>
  );
}

export default ScrollComponent;
```

## useNotification

The `useNotification` hook simplifies the process of working with browser notifications in React applications. It provides a clean and intuitive interface for requesting permission and displaying notifications.

## Usage

```jsx
import { useNotification } from 'react-mkx-toolkit';

const MyComponent = () => {
  const { requestPermission, showNotification, notificationPermission } = useNotification();

  const handleClick = () => {
    showNotification('Hello!', {
      body: 'This is a notification from your web app.',
      icon: 'path/to/your/icon.png',
    });
  };

  return (
    <div>
      <button onClick={requestPermission}>Request Permission</button>
      <button onClick={handleClick} disabled={notificationPermission !== 'granted'}>
        Show Notification
      </button>
    </div>
  );
};

export default MyComponent;
```

### Note

Call the `requestPermission` Function to request permission from the user before showing notifications.

### Returns

- requestPermission: A function to request permission for displaying notifications.
- showNotification: A function to display notifications with the given title and options.
- notificationPermission: The current notification permission state (granted, denied, or default).

## useOnlineStatus

The `useOnlineStatus` hook helps you track the browser’s online/offline status. It utilizes the navigator.onLine property and listens to the online and offline events to update the status in real time.

## Usage

```jsx
import React from 'react';
import { useOnlineStatus } from 'react-mkx-toolkit';

const MyComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>Network Status</h1>
      <p>{isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  );
};

export default MyComponent;
```

### Features

- Automatically updates when the browser goes online or offline.
- Compatible with modern browsers and React versions.
- Useful for network-aware components or offline-first applications.

## useWindowSize

The `useWindowSize` hook allows you to track the current dimensions of the browser window. It listens to the resize event and updates the width and height whenever the window is resized.

## Usage

```jsx
import React from 'react';
import { useWindowSize } from 'react-mkx-toolkit';

const MyComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
export default MyComponent;
```

### Features

- Tracks window.innerWidth and window.innerHeight in real-time.
- Automatically updates when the browser window is resized.
- Lightweight and easy to use.

## useDebounce

The `useDebounce` hook allows you to debounce a value or function, ensuring that it only updates after a specified delay. This is useful for scenarios like search input where you want to limit the number of API calls.

## Usage

```jsx
import React, { useState } from 'react';
import { useDebounce } from 'react-mkx-toolkit';

const MyComponent = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default MyComponent;
```

### Features

- Debounces a value or function.
- Customizable delay.
- Useful for limiting the rate of updates.

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                                                               |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
