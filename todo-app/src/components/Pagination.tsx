import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  page: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return <MuiPagination count={4} page={page} onChange={handleChange} />;
};

export default Pagination;
