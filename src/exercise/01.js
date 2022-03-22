// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// (prevState, nextState)
// state, action
// first param is the previous(current) state. second param is whatever is passed to the dispactch
const countReducer = (count, step) => {

  console.log('count', count)
  console.log('step', step)
  return count + step

}

function Counter({ initialCount = 0, step = 2 }) {

  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => {
    changeCount(step)
  }

  return <button onClick={ increment }>{ count }</button>
}

function App() {
  return <Counter />
}

export default App
