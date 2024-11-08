import Pagination from "react-bootstrap/Pagination";
import { ITEMS_PER_PAGE } from "../../util/constant";
import "./Pagination.css";

const PaginationGrid = ({ totalCards, currentPage, setCurrentPage }) => {
  const totalNoOfPages = Math.ceil(totalCards / ITEMS_PER_PAGE);
  const pageNumbersArray = Array.from(
    { length: totalNoOfPages },
    (_, i) => i + 1
  );
  const onPageChange = (value) => {
    setCurrentPage(value);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => {
          onPageChange(--currentPage);
        }}
      />
      {pageNumbersArray.map((page) => {
        return (
          <Pagination.Item
            key={page}
            onClick={() => onPageChange(page)}
            active={page === currentPage}
          >
            {page}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() => onPageChange(++currentPage)}
        disabled={currentPage === totalNoOfPages}
      />
      <Pagination.Last onClick={() => onPageChange(totalNoOfPages)} />
    </Pagination>
  );
};

export default PaginationGrid;
