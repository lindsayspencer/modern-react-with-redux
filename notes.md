# Notes


## Getting Started

React.js is a JavaScript library, with the purpose of showing HTML content to users and handling user interaction. It can be used to have the users interact and affect the HTML content.

React can work by itself without added libraries like Redux - but third-party packages or libraries exist to make the build process faster and easier instead of making things from scratch.

React components are made using JS functions (pre ES2015) or classes (post ES2015). Components are the most basic building blocks of React. A single component has a single purpose to contribute to the purpose of React - to render HTML and handle user interaction.

JSX is not necessary to use React, but is a useful feature. It looks like HTML but can be written as JS. It gets compiled by babel into vanilla JS.

Event handlers are used to detect user interaction and respond to it by implementing changes in the UI. *Responding to user interaction is a main purpose of React.*

React + ReactDOM libraries...
React library = contains code that defines what a component is and how the components work together to form a single application.
ReactDOM library = gets the components to render as HTML.
Both libraries are needed.

### Steps

Install/Update Node.js -> Install create-react-app -> Generate a project -> Build project!

`npm install -g create-react-app`
`npm` = runs `npm`, node-package-manager
`install` = installing a particular package
`-g` = installing globally on our computer
`create-react-app` = the name of the package we want to install
`create-react-app <project-name>` = start new project!

alt command:
`npx create-react-app <name of project>` = runs npm install and start new project at the same time (newer command requiring newer version of npm and Node)

Step 1: `npm install create-react-app`
Step 2: `create-react-app <project-name>`

### About `create-react-app` Packages

Running `create-react-app` will install more than 1700 packages. Why? The packages contain dependencies, which are needed to make the React project work.
**Babel** is one such dependency, which helps with browser support. We can code in the later versions of JS with the latest features. Babel is a command line tool that takes in the newer code we write and translates it into older versions of JS so that it will have browser support.


## First Project - JSX

### Files

- `src` - where we put all the source code we write
- `public` - where static files are stored, like images
- ` node_modules` - where all the project dependencies are stored
- `package.json` - record of our project dependencies that configures our project
- `package-lock.json` - records the exact version of packages we install
- `README.md` - instructions on how to use the project

### `npm start`

The command `npm start` must  be used from within the project directory. Ctrl + C in the terminal ends the run. It can be found at localhost:3000 in the browser.

Possible Errors:
- Port is in use: when you try to start two copies of the app on the same local port
- localhost:xxxx not working: go back to terminal, find 'on your network' message, and use that address instead


### Import

The bundler system **Webpack** allows us to combine packages and files. We can `import` and `export` files to be used by others.

`import React from 'react'`
`import` = we want to get code from some other file or dependency
`React` = conventional name for the variable we want to assign this import to
`from` = we are about to specify the name of the library or file we are importing from
`'react'` = the name of the dependency or path to the file we are importing (found in the `node_modules` directory)

`require` (common JS module system syntax) vs `import` (ES2015 module system syntax)

### React Components

**A component is either a function or a class that produces HTML to show the user (using JSX) and handles feedback from the user (using event handlers).**

### JSX

Looks like HTML but isn't. Babel compiles it into JavaScript because browsers don't understand JSX. It is syntactic sugar for developers, though.

Conventions
- double quotes around JSX properties
- single quotes around non-JSX properties  

JSX vs HTML (basically putting HTML style things in JS syntax)
- Adding custom inline styling to an element uses different syntax
- Adding a class to an element users different syntax (class -> className)
- JSX can reference JS variables
