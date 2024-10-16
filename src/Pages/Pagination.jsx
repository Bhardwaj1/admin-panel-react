import React, { useState } from 'react';
import './Pagination.css';
import { useTheme } from '../context/ThemeContext';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const { isDarkMode, toggleTheme } = useTheme();
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-arrow"
        onClick={handlePrev}
        disabled={currentPage === 1}
        style={{color:isDarkMode?"white":"#333"}}
      >
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          style={{
            color: currentPage === index + 1 ? "white" : isDarkMode ? "white" : "#333",
            backgroundColor: currentPage === index + 1 ? (isDarkMode ? "#333" : "#ddd") : "transparent",
          }}
          className={`pagination-button ${
            currentPage === index + 1 ? 'active' : ''
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        // className="pagination-arrow"
        style={{color:isDarkMode?"white":"#333"}}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
