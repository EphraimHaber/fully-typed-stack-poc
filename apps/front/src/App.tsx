import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { apiInstance } from './api-instance';

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Loading...');

  const fetchHello = async () => {
    try {
      const { status, data } = await apiInstance.appControllerGetHello();
      if (status === 200) {
        setMsg(data.msg);
      } else {
        throw new Error(`Unexpected response status: ${status}`);
      }
    } catch (error) {
      console.error('Error fetching hello:', error);
    }
  };
  useEffect(() => {
    fetchHello();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{msg}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
