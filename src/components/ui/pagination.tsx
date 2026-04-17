import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
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

    <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
      <button  onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <span style={{ margin: '0 1rem' }}>Page {currentPage} of {totalPages}</span>
      <button  onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>  

);
};

export default Pagination