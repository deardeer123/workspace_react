import logo from './logo.svg';
import './App.css';
import Inputs from './components/inputs';
import Counter from './components/counter';
import Buttons from './components/buttons';
import { useState } from 'react';

function App() {

  let[count, setCount] = useState(0);

  const changeCount = (num) =>{

    setCount(count + parseInt(num))
  }

  return (
    <div className="App">
      <div className='header-div'>Simple Counter</div>
      <div className="counter-div" ><Counter count={count} /></div>
      
      <div className="buttons-div" ><Buttons changeCount={changeCount}/></div>
    
    </div>
  );
}

export default App;
