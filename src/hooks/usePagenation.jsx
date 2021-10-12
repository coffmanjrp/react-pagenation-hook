import { useState } from 'react';

const usePagenation = ({ contentPerPage, count, min, max }) => {
  const [page, setPage] = useState(1);
  const [minContents, setMinContents] = useState(min);
  const [maxContents, setMaxContents] = useState(max);
  const pagenation = 5;
  const pageCount = Math.floor(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction) => {
    if (direction) {
      setPage((state) => (state === pageCount ? state : state + 1));

      if (page > maxContents) {
        setMaxContents(maxContents + pagenation);
        setMinContents(minContents + pagenation);
      }
    } else {
      setPage((state) => (state === 1 ? state : state - 1));

      if (page % minContents === 0) {
        setMaxContents(maxContents - pagenation);
        setMinContents(minContents - pagenation);
      }
    }
  };

  return {
    totalPages: [...Array(pageCount + 1).keys()],
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstContentIndex,
    lastContentIndex,
    page,
    setPage,
    minContents,
    maxContents,
  };
};

export default usePagenation;
