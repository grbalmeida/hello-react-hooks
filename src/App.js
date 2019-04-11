import React, { useState } from 'react'

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div> 
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false
  }

  increment () {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  decrement () {
    this.setState((prevState) => ({
      counter: prevState.counter - 1 
    }))
  }
  
  toggle () {	
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }))
  }

  render () {
    return (
      <>
        <Counter
          counter={this.state.counter}
	  increment={() => this.increment()}
	  decrement={() => this.decrement()}
        />
	    
	{this.state.toggle && <h1>Visível!</h1>}
	<button onClick={() => this.toggle()}>Toggle</button>
      </>
    )
  }
}

function CounterFunction () {
  const [state, setState] = useState({
    counter: 0,
    toggle: false
  })

  return (
    <>
      <Counter
        counter={state.counter}
        increment={() => setState(prevState => {
	  return {
            ...prevState,
	    counter: prevState.counter + 1
	  }
	})}
        decrement={() => setState(prevState => {
	  return {
	    ...prevState,
	    counter: prevState.counter - 1 
	  }
	})}
      />
      {state.toggle && <h1>Visível!</h1>}
      <button onClick={() => setState(prevState => ({
        ...prevState,
	toggle: !prevState.toggle
      }))}>
        Toggle
      </button>
    </>
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
