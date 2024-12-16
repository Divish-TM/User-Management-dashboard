import React from "react";
import { Box, Button } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, marginTop: 2 }}>
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "contained" : "outlined"}
          color="primary"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;
