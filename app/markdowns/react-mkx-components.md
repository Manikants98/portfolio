## React Useful Custom Components

<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding:10px 0px;" >
  <img src="https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue" alt="Author" />
  <img src="https://img.shields.io/npm/v/react-mkx-components?color=1C939D" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/react-mkx-components" alt="npm downloads" />
  <img src="https://img.shields.io/npm/l/react-mkx-components" alt="license" />
  <img src="https://img.shields.io/npm/unpacked-size/react-mkx-components" alt="size" />
</div>

## Description

React Custom Components provide ready-to-use UI elements that can be easily integrated into your React applications. This package includes a collection of useful and customizable components designed to enhance your development workflow and user experience.

## Table of Contents

- [Installation](#installation)
- [Input](#input)
- [Select](#select)
- [Browser Support](#browser-support)
- [License](#license)

## Installation

You can install the package using npm:

```shell
npm install react-mkx-components
```

Or using yarn:

```shell
yarn add react-mkx-components
```

## Input

- Custom input component with formik integration and optional visibility toggle for password fields.
- Easy to handle when you have using formik, handles errors etc.

```jsx
import React from 'react';
import { Input } from 'react-mkx-components';
import { useFormik } from 'formik';
const MyComponent = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div>
      <Input name="username" label="Username" placeholder="Enter Your Username" formik={formik} />
    </div>
  );
};

export default MyComponent;
```

## Select

- Custom select component with formik integration.
- Easy to handle when you have using formik, handles errors etc.

#### Example

```jsx
import { Button, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import Select from 'react-mkx-components'
import  as Yup from 'yup'

const MyComponent: React.FC = () => {
 const formik = useFormik({
   initialValues: {
     value: '',
   },
   validationSchema: Yup.object({
     value: Yup.string().required(),
   }),
   onSubmit: (values) => {
     console.log(values)
   },
 })

 return (
   <form onSubmit={formik.handleSubmit}>
     <Select
       name="value"
       className="w-72"
       label="Test"
       formik={formik}
     >
       <MenuItem value="Item 1">Item 1</MenuItem>
       <MenuItem value="Item 2">Item 2</MenuItem>
       <MenuItem value="Item 3">Item 3</MenuItem>
       <MenuItem value="Item 4">Item 4</MenuItem>
       <MenuItem value="Item 5">Item 5</MenuItem>
     </Select>
     <Button type="submit">Submit</Button>
   </form>
 )
}

export default MyComponent
```

`Choice` Component

The `Choice` component provides conditional rendering functionality with the following sub-components:

- `When`: Renders children when a condition is true.
- `Then`: Renders children when a condition is false.
- `And`: Renders children if both conditions are true.

```jsx
import { Choice } from 'react-mkx-components';

const ExampleComponent = () => {
  const condition = true;

  return (
    <div>
      <Choice.When condition={condition}>
        <p>This will be rendered if the condition is true.</p>
      </Choice.When>
      <Choice.Then condition={condition}>
        <p>This will be rendered if the condition is false.</p>
      </Choice.Then>
      <Choice.And condition={condition}>
        <p>This will be rendered if both conditions are true.</p>
      </Choice.And>
    </div>
  );
};

export default ExampleComponent;
```

## ScrollDiv

- Scrollable div component that triggers pagination when scrolled to the bottom.

#### Exmaple

```jsx
<ScrollDiv
  page={currentPage}
  setPage={setPage}
  totalPage={totalPages}
  style={{ backgroundColor: 'lightgray', padding: '10px' }}
  height={400}
>
  {content}
</ScrollDiv>
```

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                         | Latest ✔                                                                                            | Latest ✔                                                                                         | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                                                               |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
