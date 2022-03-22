// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialCount = 0, step = 1}) {

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const [count, dispatchChangeCount] = React.useReducer(countReducer, { count: initialCount })
  const increment = () => {
    return dispatchChangeCount({type: 'increment'})
  }
  return <button onClick={increment}>{count.count}</button>
}

function App() {
  return <Counter />
}

export default App
