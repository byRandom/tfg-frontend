import React, { useEffect } from "react";

const PaginationWidget = ({
  update,
  setUpdate,
  start,
  setStart,
  amount,
  setAmount,
  page,
  setPage,
}) => {
  let handlePageChange = (fact) => {
    if (fact === 1) {
      setStart(start + 10);
    }
    if (fact === -1 && start > 0) {
      setStart(start - 10);
    }
    if (fact === 2) {
      setStart(start + 20);
    }

    if (fact > 0) setPage(page + fact);
    else {
      if (page !== 1) setPage(page + fact);
    }
    setUpdate(!update);
  };
  let incrementPage = () => {
    handlePageChange(1);
  };
  let decrementPage = () => {
    handlePageChange(-1);
  };
  let incrementPage2 = () => {
    handlePageChange(2);
  };
  useEffect(() => {}, [update]);
  return (
    <nav
      aria-label="Page navigation"
      className="m-auto align-middle self-center w-3/12  "
    >
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link bg-inherit text-white hover:bg-gray-700"
            href="#"
            aria-label="Previous"
            onClick={decrementPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link text-white bg-gray-700 hover:bg-gray-700"
            href="#"
          >
            {page}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link bg-inherit text-white hover:bg-gray-700"
            href="#"
            onClick={incrementPage}
          >
            {page + 1}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link bg-inherit text-white hover:bg-gray-700"
            href="#"
            onClick={incrementPage2}
          >
            {page + 2}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link bg-inherit text-white hover:bg-gray-700"
            href="#"
            aria-label="Next"
            onClick={incrementPage}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationWidget;
