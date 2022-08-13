import React, {useState} from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({ age: 20, numSimblings: 4})
  const handleClick = val => 
  setState({
    ...state, [val]: state[val] + 1
  })
  
  const { age, numSimblings } = state
  
  return (
    <div className="App">
      <header className="App-header">
      
        <button onClick={handleClick.bind(null, 'age')}>
        Olamide Deborah!
        </button>
        <button onClick={handleClick.bind(null, 'numSimblings')}>siblings</button>
        <p>i am {age} old</p>
        <p>i have {numSimblings} </p>
      </header>
    </div>
  );
}

export default App;
