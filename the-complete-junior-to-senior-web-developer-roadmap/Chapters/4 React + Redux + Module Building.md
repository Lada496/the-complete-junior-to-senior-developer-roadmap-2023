# 4. React + Redux + Module Building

# Thinking like a senior developer

- Consider why these libraries exist
- Understand the principle of these libraries
- Know how to read documents

# Angular vs React vs Vue

- No tool solves everything
- Angular: Fit with large scale projects such as bank system with massive code base because it’s Framework we can share everything we need for development
- React: Project requires flexibility to add libraries
- Vue: Good for simple projects

# Introduction To React.js

## Components

- [https://bradfrost.com/blog/post/atomic-web-design/](https://bradfrost.com/blog/post/atomic-web-design/)

- [https://mdbootstrap.com/docs/react/](https://mdbootstrap.com/docs/react/)

## One way Data Flow

Data flows top to bottom and never be the other way around

## Virtual DOM

[https://ericnormand.me/article/what-is-react](https://ericnormand.me/article/what-is-react)

# React Fundamentals

## Create React App

- [https://www.codingninjas.com/codestudio/library/difference-between-npm-and-npx#:~:text=NPX stands for Node Package,0 and above](https://www.codingninjas.com/codestudio/library/difference-between-npm-and-npx#:~:text=NPX%20stands%20for%20Node%20Package,0%20and%20above).
- [https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

## Folder Structure

The place React components rendered

```tsx
// public/index.html
<div id="root"></div>
```

```tsx
// src/index.js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## \***\*The Dirty Little Secret To Become An Expert\*\***

> Read f\*\*\*ing documentation until you get it.
> Most online instructors aren’t actual experts in the filed with “experience”. They are simply teaching you based off on reading documentation.

[https://react.dev/reference/react/StrictMode](https://react.dev/reference/react/StrictMode)

## React Lifecycle

- Mounting: When components are added to the App
- Updating: When components state is updated
- Unmounting: When components are removed from the App

# Updating Apps

1. `npm update`
2. `npm audit fix`
3. `npm audit` to see how to update packages
4. `npm audit fix --force` ⚠️ This might break your app

# React Hooks

## Two Rules

- Only Call Hooks at the Top Level
- Only Call Hooks from React Functions

ref: [https://react.dev/learn/thinking-in-react#props-vs-state](https://react.dev/learn/thinking-in-react#props-vs-state)

## Redux Strong Points

- Good for managing large state
- Useful for sharing data between containers
- Predictable state management using the 3 principles
  1. Single source of truth
  2. State is read only (immutability)
  3. Changes using pure functions (i.e. no side-effects)

Action → Reducer → Store → Make Changes

- Flux Pattern
  Action → Dispatcher → Store → View
- MVC (Before Flux)
  Action → Controller →→→Modals →→→ Views

# Bandling (Webpack aka module bundler)

Parcel, and rollup
ref: [https://webpack.js.org/](https://webpack.js.org/)

## 4 main ideas Webpack has

1. entry: Where dose webpack enter into your project. Usually your index.js.
2. output: usually build/dist folder
3. loaders: tools to compile or transpile your code
4. plugins:

## ESlint plugins

- [https://www.npmjs.com/package/eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [https://www.npmjs.com/package/eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [https://www.npmjs.com/package/eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

webpack config generator: [https://createapp.dev/webpack/react--babel--jest--react-hot-loader](https://createapp.dev/webpack/react--babel--jest--react-hot-loader)

## React with Parcel

1. create a folder
2. `npm i react react-dom`
3. `npm init -y`
4. `npm i --save-dev parcel-bundler babel-preset-env babel-preset-react`
5. `touch .babelrc`
6. inside of .babelrc

```
{
  "presets": ["env", "react"]
}
```

1. at package.json

```
"scripts": {
    "start": "parcel index.html"
  },
```

1. `touch index.html`
2. in index.html

```
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

1. `touch index.js`
2. at index.js

```
import React from "react";
import ReactDOM from "react-dom/client";

const Hello = () => <div>WHATSUP!</div>;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
```
