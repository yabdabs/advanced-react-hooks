// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// (prevState, nextState)
// state, action
const countReducer = (state, newState) => {

  console.log('state', state)
  console.log('newState', newState)
  return newState + 1

}

function Counter({ initialCount = 0, step = 1 }) {

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => {
    changeCount(count)
  }

  return <button onClick={ increment }>{ count }</button>
}

function App() {
  return <Counter />
}

export default App
