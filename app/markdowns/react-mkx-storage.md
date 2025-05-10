## React Custom Hooks for Browser Storage Management

<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding:10px 0px;" >
  <img src="https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue" alt="Author" />
  <img src="https://img.shields.io/npm/v/react-mkx-storage?color=1C939D" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/react-mkx-storage" alt="npm downloads" />
  <img src="https://img.shields.io/npm/l/react-mkx-storage" alt="license" />
  <img src="https://img.shields.io/npm/unpacked-size/react-mkx-storage" alt="size" />
</div>

## Description

This package provides three custom React hooks for managing state in local storage, session storage and cookie storage: `useLocalStorage`, `useSessionStorage` and `useCookieStorage`.

## Table of Contents

- [Installation](#installation)
- [useLocalStorage](#uselocalstorage)
- [useSessionStorage](#usesessionstorage)
- [useCookieStorage](#usecookiestorage)
- [Browser Support](#browser-support)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install react-mkx-storage
```

Or using yarn:

```bash
yarn add react-mkx-storage
```

### `useLocalStorage`

A custom React hook to manage state in local storage.

#### Parameters

- `key` (string): The key under which to store the value in local storage.
- `initialValue` (string | number | object | array): The initial value to use if no value is found in local storage.

#### Usage

```jsx
import { useLocalStorage } from 'react-mkx-storage';

const MyComponent = () => {
  const [value, setValue] = useLocalStorage('key', 'initialValue');

  // Use value and setValue as needed

  return (
    // Your component JSX
  );
};
```

### `useSessionStorage`

A custom React hook to manage state in session storage.

#### Parameters

- `key` (string): The key under which to store the value in session storage.
- `initialValue` (string | number | object | array): The initial value to use if no value is found in session storage.

#### Usage

```jsx
import { useSessionStorage } from 'react-mkx-storage';

const MyComponent = () => {
  const [value, setValue] = useSessionStorage('key', 'initialValue');

  // Use value and setValue as needed

  return (
    // Your component JSX
  );
};
```

### `useCookieStorage`

A custom React hook to manage state in Cookie storage.

#### Parameters

- `key` (string): The key under which to store the value in Cookie storage.
- `initialValue` (string | number | object | array): The initial value to use if no value is found in Cookie storage.

#### Usage

```jsx
import { useCookieStorage } from 'react-mkx-storage';

const MyComponent = () => {
  const [value, setValue] = useCookieStorage('key', 'initialValue');

  // Use value and setValue as needed

  return (
    // Your component JSX
  );
};
```

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   | 11 ✔                                                                                                                                   |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
