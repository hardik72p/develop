import React, { useState } from 'react';

function Pagination(props) {
  var pageNumber = [];
  const windowLength = props.windowLength;
  const currentWindow = props.currentPage;
  const pre = '<<'
  const next = '>>'
  for (let i = 1; i <= Math.ceil(props.totalItem / props.itemPerPage); i++) {
    pageNumber = [...pageNumber, i]
  }
  let xyz = pageNumber.slice(0, windowLength);
  const [windowGap, setWindowGap] = useState(xyz);

  const preNavigation = () => {
    let firstIndex = windowGap[0] - windowLength
    if (firstIndex <= 0) {
      setWindowGap(pageNumber.slice(0, windowLength));
    }
    else
      setWindowGap(pageNumber.slice(windowGap[0] - 1 - windowLength, windowGap[0] - 1));
  }

  const nextNavigation = () => {
    let lastIndex = windowGap[0] - 1 + windowLength * 2;
    if (windowGap[windowGap.length - 1] == pageNumber[pageNumber.length - 1])
      return null;
    else if (lastIndex <= pageNumber[pageNumber.length - 1])
      setWindowGap(pageNumber.slice(windowGap[0] - 1 + windowLength, windowGap[0] - 1 + windowLength * 2));
    else if (windowGap[0] - 1 + windowLength <= pageNumber[pageNumber.length - 1])
      setWindowGap(pageNumber.slice(windowGap[0] - 1 + windowLength, pageNumber[pageNumber.length - 1]));
  }

  return (
    <nav>
      <ul className="pagination">
        <button onClick={preNavigation} className="page-link">{pre}</button>
        {windowGap.map(number => {
          return <li key={number}>
            <a onClick={() => props.paginate(number)} href='!#' className="page-link">{number}</a>
          </li>
        })
        }
        <button onClick={nextNavigation} href='!#' className="page-link">{next}</button>
      </ul>
    </nav>
  );
}

export default Pagination;