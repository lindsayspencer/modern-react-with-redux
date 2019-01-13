# Redux Notes

Redux allows us to extract state to a Redux library. React is really for handling user interaction.
Has a high initial learning curve.
Will probably use several name exports (in addition to default exports):
```
import React from 'react';
import { selectSong } from '../actions';
```

## What is Redux?

1. State management library
2. Makes creating complex applications easier
3. Not required to create a React app
4. Not explicitly designed to work with React (can be used with other library/frameworks)

### Redux Cycle

Action Creator => Action => dispatch => Reducers => State

Analogy:
Imagine building an insurance company, where a customer holds a 'policy', and if bad stuff happens our company pays them. A customer 'claim' describes the bad thing that happened to them, saying why we need to pay them.
The HQ has a Claims History dept. (stores claims made), Policies dept. (stores policy and customer info), and Accounting dept. (stores the cash that gets paid out to customers)
What happens when a new customer shows up to get a policy from us?
- customer wants a new policy - fills out a form saying "I want to get a policy"
- they will come to our HQ
- A HQ form receiver (front office) accepts the form
- They copy the form
- They hand one copy to each dept. (even if the dept. doesn't need a copy of it)
- Management is always querying the departments for the info they hold - so the info gets moved to be stored in a central depository of company data, outside of the dept. Now, when new info comes in, the form receiver delivers not only the new form, but also the data repository to the dept.
- The dept. processes the info, and passes the updated data back to the central repository
- The new form itself has a 'type', such as claim or policy, and a 'payload', such as customer info, claim or policy amount, etc.
- Processing a claim... The claims dept. will receive the new form and the central claim data from the receiver; if the new form is not a claim, they don't care and will just return the original claim data; if the new form is a claim, they will pull the 'payload' data off the form, update the data pool and send that back to the central repository.  

**How does this relate to Redux?**
https://codepen.io/WonderLindsay/pen/PXxWvq?editors=0010

> 1. Action Creator => 2. Action (has a type property) => 3. dispatch function => 4. Reducers => 5. State

 EQUALS

> 1. Person dropping off form => 2. the form (has a type property) => 3. form receiver => 4. Departments => 5. compiled department data/central repository

Reducer = function responsible for taking in an action and data, processes that action to see how to update its data, then returns the data to be stored elsewhere. Like the depts. in our example.
State in Redux = central repository for all our data, so our React components can find all the data in one place
Action Creators = created for each action (form) type that needs to be handled

**Action Creator + Action Created**
*Person dropping off form + form*
Example Action Creator handling an action (they all look almost exactly alike):
```
const createPolicy = () => {
  return {
    // Action (form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};
```

**Reducers + Returning State**
*Departments + central repository*
```
// Reducers (Departments)
// aaaaaaalways passed two pieces of data in the same order [old data, new action/form]
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // takes ...all of the old records, puts them into a new array, and adds the payload data from the new action (the ... is a JS element that takes the values from the original array and adds it to the new array)
    return[...oldListOfClaims, action.payload];
  }
   return oldListOfClaims;
};
```
**Important Note!** If this is the first time this Reducer is called, then no original set of data yet exists. This is why we add the `= []` to the passed in arguments. Also, there can be several conditions/action types to consider, such as:
```
const accounting = (bagOfMoney, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }
    return bagOfMoney;
}
```
Other example:
```
const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if(action.type === 'DELETE_POLICY'){
    // .filter() produces a new array and does not alter the original data
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
}
```

*So far, this is basic JS, no use of the Redux library...*

**Redux Store**
```
// calling in Redux library
const { createStore, combineReducers } = Redux;

// creating an object of our reducers (where the action/form needs to be sent to on creation)
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// saving our data as a Redux Store (createStore is a Redux method)
const store = createStore(ourDepartments);

// creating a new action by calling our Action Creator createPolicy, and passing in action data
const action = createPolicy('Alex', 20);

// sending the action to our 'store', aka delivering it to each of our Reducers/Departments
store.dispatch(action);

// checking our State/central repository
console.log(store.getState());
```

**Redux Cycle**
To change state of our app, we call an...
=> Action Creator
Which produces an...
=> Action
Which gets fed into...
=> dispatch
Which forwards the action to...
=> Reducers (saved in our store)
Which creates new...
=> State
Which waits until we need to update the state again, at which time the cycle starts over!

Notes:
- multiple actions can be handled at once more easily
- state is accessible in one place
- we have properties on our State object equal to the Reducers
- **we can only modify state in our app (saved in our store) via our Action Creators and Reducers (by dispatching an action that has been created by an Action Creator!)**


## React with Redux

Uses React (original library), React-Redux (allows the two to communicate), Redux (libraries to use Redux system).

The store contains our reducers and state of our application.

### Designing Redux Side of Application
Provider and Connect components are from Redux - we create instances of them.
Provider (provides data to our other components) => App => Connect (communicates with Provider in order to get state updates, delivers data to other components that need it) => OtherComponents  
/src
  index.js
  /actions
    index.js (commonly done)
  /components
  /reducers
    index.js (commonly done)
  /index.js

### Using the Redux Library
Redux documentation will tell you what is a named vs exported default.
On reducers list, import:
`import { combineReducers } from 'redux';`
in order to achieve:
`// creating an object of our reducers (where the action/form needs to be sent to on creation)
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});
`

### Steps to Set Up Redux
1. create src/actions directory; add new index.js file
2. create src/reducers directory; add new index.js file
3. code action creators with named exports
4. code reducers; import `{ combineReducers }` from redux; use `combineReducers({reducer: reducer...})`; `export default` the combined reducers  
5. in the root index.js file, import `{ Provider }` from react-redux and `{ createStore }` from redux; wrap the App component in the Provider component, passing it a single prop, `store={createStore(reducers)}`
6. in child component files, use `import { connect } from 'react-redux';` in order to utilize the Connect component to listen for changes in state from the Provider; also add `mapStateToProps()` function with state passed as its argument  (it is intended to retrieve state!); then export as `export default connect(mapStateToProps)(SongList);` (connect is a function that returns a function - the component is passed into the nested function) - now our components have access to state for the whole application!
Ex:
```
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render(){
        return(
            <div>SongList</div>
        )
    };
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
```
7. Can pass the action creator as a props as well via the connect function; it is then an available function from the props for that component! **Passing it into connect is what allows the dispatch() function to occur - otherwise, we can call the action creator, but it will only create the action, not send it to the reducers for us. The connect function CONNECTS everything together for us.**

### Extra Notes
1. Redux is not magic - it does not automatically detect action creators being called
2. Redux does not automatically detect a function returning an object that is an 'action'

## Project: Songs

SongList displayed on the left, and SongDetail of clicked song displayed on the right.

Redux:
- Reducers: Song list reducer, Selected song reducer (our two pieces of state)
- Action Creators: select song (our props action handler that will update our state)
