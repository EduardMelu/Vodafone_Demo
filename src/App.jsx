import { useState } from 'react';
import Cat from './Components/Cat';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
        <Cat/>
      </header>
    </div>
  );
};

export default App;
