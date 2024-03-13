import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from './assets/logo.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ActionsLocalStorage from './services/localstorage/Actions.LocalStorage';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    ActionsLocalStorage.add('count', count.toString());
  };

  const handleUpdate = () => {
    ActionsLocalStorage.update('count', (count).toString());
  };

  const handleRemove = () => {
    ActionsLocalStorage.remove('count');
  };

  const handleGet = () => {
    const storedCount = ActionsLocalStorage.get('count');
    alert(`Count: ${storedCount}`);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={logo} className="logo" alt="Normal logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          Increment count
        </button>
        <br></br>
        <br></br>
        <button onClick={handleAdd}>Add count to localStorage</button>
        <button onClick={handleUpdate}>Update count in localStorage</button>
        <button onClick={handleRemove}>Remove count from localStorage</button>
        <button onClick={handleGet}>Get count from localStorage</button>
        <p>count is {count}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
