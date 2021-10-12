import { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await res.json();

      setList(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">React Pagination Hook</h1>
        <List list={list} />
      </header>
    </div>
  );
}

export default App;
