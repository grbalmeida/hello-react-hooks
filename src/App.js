import React, { useState } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div> 
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement () {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render () {
    return (
      <Counter
        counter={this.state.counter}
	increment={() => this.increment()}
	decrement={() => this.decrement()}
      />
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)

  return (
    <Counter
      counter={counter}
      increment={() => setCounter(counter + 1)}
      decrement={() => setCounter(counter - 1)}
    />
  )
}

const Counter = ({ counter, increment, decrement }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default App