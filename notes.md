# Notes

## Bookmarks
- Breather and Review lesson (lesson 69)

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

### JSX

Looks like HTML but isn't. Babel compiles it into JavaScript because browsers don't understand JSX. It is syntactic sugar for developers, though.

Conventions
- double quotes around JSX properties
- single quotes around non-JSX properties  

JSX vs HTML (basically putting HTML style things in JS syntax)
- Adding custom inline styling to an element uses different syntax (`<button style={{ backgroundColor: 'blue', color: 'white'}}>{ buttonText.text }</button>`)
- Adding a class to an element users different syntax (class -> className)
- JSX can reference JS variables
-

Objects cannot be rendered as text (unless referencing a particular property), but they can be used as attributes.

**Check the browser console for warning messages about invalid properties etc. while building your application.**

### React Components

**A component is either a function or a class that produces HTML to show the user (using JSX) and handles feedback from the user (using event handlers).**

Functional vs Class-based Components:
- Functional: Good for simple content (showing simple content to the user without much logic behind it - contains some JSX and immediately returns it)
- Class: Good for everything else (complex logic, responding to user input, making network requests, etc.)

Class-based Components:
PROS
- Easier code organization!
- Can use the React system `state`, making it easier to handle user input
- Understands lifecycle events (like `ComponentDidMount`) which makes it easier for things to happen when the app first starts
RULES
- Must be a JS class
- Must extend (be a subclass of) React.Component
- Must define a render method that must return some amount of JSX
- Must have a constructor function that passes `props` as an argument and contains `super(props)`.

The three tenets:
- Component Nesting: a component can be shown inside of another (<App />)
- Component Reusability: we want to make components that can be easily reused throughout the application (like the DRY rule)
- Component Configuration: we should be able to configure a component when it is created (we should have the ability to customize a component when it's created)

Creating a Reusable & Configurable Component:
- Identify the JSX that appears to be duplicated
- What is the purpose of that block of JSX? Think of a descriptive name for what it does
- Create a new file to house this new component - it should have the same name as the component
- Create the new component in the new file, paste the JSX into it
- Make the new component configurable using the React 'props' system

Linking Components:
- export Component from the JS file with `export <Component-Name>;`
- import the Component in the file of the Component that needs to use it with `import <Component-Name> from 'Component-File';`

### Render

Each React component MUST contain a render method.

Avoid using conditionals in the render method/having multiple return statements inside of a render method. Helper functions (like `renderContent()` below) can be used:
```
renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }
  render() {
    return(
      <div style={{border: '5px solid red'}}>
        {this.renderContent()}
      </div>
    )
}
```

### Props

(Short for 'properties'.)

Component Hierarchy: a diagram that displays the relationship between each component
(*Components* project: <App /> --> <CommentDetail />)

**The props system in React allows us to pass data from a parent component to a child component (down the Component Hierarchy). The goal is to customize or configure a child component.**
The parent dictates how the child acts or behaves. Parent provides the data; Child consumes the data.

Providing props from parent to child:
`<Comment Detail author="Sam" />`
`author`: name of the prop
`"Sam"`: value of the prop

**Props is an object with a key**, which is provided by the parent component. The child component can consume the prop by accessing the object.key. Multiple props keys can be created so that multiple props can be passed!

We can also pass one component to another as props: `<ApprovalCard> <CommentDetail /> </ApprovalCard>`. The child component (`CommentDetail`) then shows up as a props inside of `ApprovalCard` as `{props.children}` (in order to show the whole object, instead of referencing each individual property that makes up `CommentDetail`). Other text or elements can also be passed as `props.children` in this way.  

### State

**State is a JS object that contains data relevant to a component.** It is what can tell the component to automatically rerender.

**The key to get a component to rerender (update) is to update its state (using setState method). Never assigning a new value to this.state directly!**
(The only time you can assign a value to state directly [direct assignment] is when initializing this.state in the constructor function.)

State is always an object!

We put data in state if we expect it to change over time!

Rules:
- Only usable with class-based components (*This is has been changed with the introduction of the new Hooks system in React*)
- Props and state are often confused!
- `State` is a JS object that contains data relevant to a component
- Updating `state` on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created  
- **State can ONLY be updated using the setState method**

Two ways to initialize state:
- object in the constructor method - `this.state = {}`
- outside of constructor method, use `state ={}` - the constructor methods can be removed entirely with this method (this is because Babel will essentially implement the constructor method for us, so it's a short cut for the developer)

State can be passed as a prop to other components!

### Component Lifecycle

Lifecycle methods are called at specific times during a component's lifecycle.

Timeline:
- constructor - constructs the initial data of the app // good place to do state initialization and initial data loading (like network requests - although this is not best practice)
- render - required, gets called after initial app creation // avoid doing anything other than returning JSX
- componentDidMount - this is called one time immediately after the component appears on the screen // Good place to do data loading or starting an outside process (like retrieving data from a database)
- componentDidUpdate - waits for when something is updated, as it is called automatically when the component is updated (also, the render method is called right before componentDidUpdate, as something has to be rerendered/updated to trigger this method) // good place to do more data-loading when state/props change
- componentWillUnmount - waits and is immediately called when a component is no longer shown // good place to do cleanup (especially for non-React stuff)

There are other rarely used lifecycle methods:
- shouldComponentUpdate
- getDerivedStateFromProps
- getSnapshotBeforeUpdate

### Other Elements

- How do we get feedback from the user?
- How do we fetch data from some outside API or server?
- How do we show lists of records?

### Event Handlers

When calling a method from your class-based component when an event happens (such as `onChange`), it does NOT get called as a function - needs to be `onChange={this.onInputChange}` - which AUTOMATICALLY obtains the event object for us so we can go ahead and pass it in the method itself.
> Question: what if you used `onChange={(e) => this.onInputChange(e)}`?

Common event handlers:
- onClick: user clicks on something
- onChange: user changes text in an input
- onSubmit: user submits a form

Common method name for these:
- onInputChange or handleInputChange etc.

Controlled vs Uncontrolled Elements

### `this` in React class-based components

Common error message: "Cannot read property 'state' of undefined"
Remember that `this` changes depending on where/when the function is called.

Solutions:
1. Define our constructor function inside of our class and bind the `this` keyword.
 Ex: `this.state = this.state.bind(this)`
2. Use an arrow function, which automatically binds the value of `this` for everything inside of the function
 Ex: `onFormSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.searchString);
  }`
3. Passing an arrow function directly into the event handler prop, in the callback function
 Ex: `onSubmit={() => this.onFormSubmit()}`


### React refs

Short for 'reference'.
A system that gives direct access to a single DOM element rendered by a React component.
We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.  

## Project Notes

### Seasons

The `App` component will pass data to our `SeasonDisplay` component so it can change the display based on the user's location (retrieved via `window.navigator.geolocation.getCurrentPosition()`) and date.

Timeline for getting geolocation data when using a functional component:
- JS file is loaded by user's browser
- Our `App` component gets called
- It calls the geolocation service
- `App` returns JSX and gets rendered as HTML
- ...still waiting for geolocation info even though our app is already rendered...
- We eventually get the result of the geolocation request
The reason for this is that there is no understanding of lifecycle events with only functional components. Class-based components will solve this issue - it can tell the app to rerender itself once the data has arrived, and it can make use of React's `state` system.

After refactoring the code to use class-based components, here is our update timeline:
- JS file is loaded by user's browser
- Instance of App component is created
- App components `constructor` function gets called (along with `super(props)`)
- State object is created and assigned to the `this.state` property
- We call geolocation service
- React calls the component's render method
- App returns JSX, gets rendered to the page as HTML
- ...waiting...
- We get the geolocation result!
- We are able to update our state object with a call to `this.setState` now that the new data has arrived (state can only be updated with the setState method)
- React sees that we updated the state of a component
- React calls our `render` method again
- Render method returns some updated JSX


Example of Conditional Rendering:
```
render() {
       if (this.state.errorMessage && !this.state.lat){
           return <div>Error: {this.state.errorMessage}</div>
       };
       if(!this.state.errorMessage && this.state.lat){
           return <div>Latitude: {this.state.lat}</div>
       };

       return <div>Loading...</div>;
 }
```

Adding CSS files:
- import CSS files into the relevant component files (`import './SeasonDisplay.css'`)

We can apply default props to a component, in case other props are not available
`<Component>.defaultProps = {}`


### Pics

App Challenges:
- Need to get a search term from the user (receiving user interactions)
- Need to use that search term to make a request to an outside API and fetch data
- Need to take the fetched images and show them on the screen in a list

Separate Components:
- main App component, for nesting:
- SearchBar component
- ImageList component

After adding an event handler to a text input...
Flow:
- User types into the input
- Callback gets invoked
- We update our component by calling setState with the new value
- Component rerenders itself
- Input is told what the value is (coming from state)
 = a controlled element!
 Otherwise, the React component does not have access later to the input data, only the HTML doc does. That data needs to be stored and accessible in our React app, not solely in the DOM.
 -> **We want to store our data inside of our components (in state), not inside the DOM.**
 This is why we add the line `value={this.state.searchString}` - we want to make sure the data is being provided by our application, not by the DOM!!

 Passing event handlers as a prop so that state can be handled by a parent component.
 `<SearchBar onSubmit={this.onSearchSubmit} />`

 For API requests:
 - axios - 3rd party package (more built in capability) (`npm install --save axios`)
 - fetch - built in browser function (more lightweight but lower level)

 Used this code for unsplash api:
 ```
 onSearchSubmit(searchString){
        console.log(searchString);
        // use searchString to send a request to Unsplash API
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: searchString },
            headers: {
                Authorization: 'Client-ID 8807b453b0e307c764ee01cdb13eb198415a0a37e55824f77b1be424bdacd174'
            }
        })
        // with promised based syntax
        .then(response => {
          console.log(response.data.results);
          });
    }
    ```

    OR

    ```
    // async await based syntax
    async onSearchSubmit(searchString){
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
            params: { query: searchString },
            headers: {
                Authorization: 'Client-ID 8807b453b0e307c764ee01cdb13eb198415a0a37e55824f77b1be424bdacd174'
            }
        });

        console.log(response.data.results);
    }
    ```

`.then` method is the promised based syntax to receive and handle the response data.

`async await` based syntax does the same thing. Put `async` keyword in front of method name, find what is being returned/taking time to resolve and put `await` keyword in front of that. What is returned gets saved to a variable (like `const response`).

(The `.then` method handles the response with the JSON data.)

API request timeline:
- Component renders itself one time with no list of images!
- onSearchSubmit method called
- Request made to unsplash
- ...wait... (it is an asynchronous request)
- request complete
- set image data on state of App component
- App component rerenders and shows images

Displaying the retrieved data:
Using the `map()` method to loop through the retrieved data and display the individual array elements.
```
const images = props.images.map((image) => {
        return <img src={image.urls.regular} alt={image.description} key={image.id} />
    });
    ```
This can be further deconstructed to:
```
const images = props.images.map(({ urls, description, id }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });
```

Don't forget to add a key to each item! The key prop allows the React diffing method to occur - to only rerender the changed elements, which saves time. It compares the items by their keys. (It is a performance consideration. This is only important for lists of elements.) *The key gets added to the root element that is being returned by the map method.*

Steps to style ImageCard to be the height of the image:
- let the ImageCard render itself and its image
- Reach into the DOM and figure out the height of the image (`document.querySelector('img').clientHeight` but using the React ref system)
- Set the image height on state to get the component to rerender
- When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

Wrap-up:
- Used event handlers to pass in a callback function from a specific function, so it will be called when an action occurs (we ran into the issue of the binding of the `this` keyword) - if you have a callback function it is best to use an arrow function to automatically bind the `this` keyword
- To communicate from a child to parent, we pass a prop to the child from the parent, so the child can use it to let the parent know an action occurred, then the parent can handle the updates and tell the child how to rerender (by updating state)
- it is important to have keys on each listed item to allow the React diffing system to occur
- the React ref system (`createRef()`) allows us to access/reference info from the DOM
- we used the grid CSS system a bit to see how it can interact uniquely with React  
