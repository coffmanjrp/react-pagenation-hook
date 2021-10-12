import { useEffect, useState } from 'react';
import List from './components/List';
import Pagenation from './components/Pagenation';
import usePagenation from './hooks/usePagenation';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
    minContents,
    maxContents,
  } = usePagenation({
    contentPerPage: 5,
    count: lists.length,
    min: 0,
    max: 5,
  });
  const slicedLists = lists.slice(firstContentIndex, lastContentIndex);
  const pagenationProps = {
    page,
    totalPages,
    prevPage,
    nextPage,
    setPage,
    minContents,
    maxContents,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await res.json();

      setLists(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">React Pagination Hook</h1>
        <List lists={slicedLists} />
        <Pagenation {...pagenationProps} />
      </header>
    </div>
  );
}

export default App;
