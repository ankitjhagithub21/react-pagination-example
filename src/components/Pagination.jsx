// components/Pagination.js
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        <button disabled={currentPage===1} onClick={()=>paginate(currentPage-1)}>prev</button>
        {pageNumbers.map((number) => (
          <li key={number} className={`pagination-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <button disabled={currentPage===postsPerPage} onClick={()=>paginate(currentPage+1)}>next</button>
      </ul>
    </nav>
  );
};

export default Pagination;
