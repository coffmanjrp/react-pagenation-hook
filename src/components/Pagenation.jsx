const Pagenation = ({
  page,
  totalPages,
  prevPage,
  nextPage,
  setPage,
  minContents,
  maxContents,
}) => {
  return (
    <div className="pagination">
      <div>
        {page}/{totalPages.length - 1}
      </div>
      <ul className="page-numbers">
        {page !== 1 && (
          <li>
            <button className="btn" onClick={prevPage}>
              Prev
            </button>
          </li>
        )}
        {minContents >= 1 && (
          <li>
            <button className="btn" onClick={prevPage}>
              &hellip;
            </button>
          </li>
        )}
        {totalPages.map((index) => {
          if (index > minContents && index <= maxContents) {
            return (
              <li key={index}>
                <button
                  className={`btn ${page === index + 1 ? 'active' : ''}`}
                  onClick={() => setPage(index)}
                >
                  {index}
                </button>
              </li>
            );
          }

          return false;
        })}
        {totalPages.length - 1 > maxContents && (
          <li>
            <button className="btn" onClick={nextPage}>
              &hellip;
            </button>
          </li>
        )}
        {page !== totalPages.length - 1 && (
          <li>
            <button className="btn" onClick={nextPage}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagenation;
