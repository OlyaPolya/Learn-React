import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from '../../../../hooks/redux';
import { setCurrentPage } from '../../../../store/slice/SearchSlice';

const TOTAL_PAGE_BUTTONS = 5;
const MIN_DISPLAY_PAGES_COUNT = 2;
const FIRST_PAGE = 1;

function Pagination(): JSX.Element {
  const { totalPages } = useSelector((state) => state.photosReducer);
  const { currentPage } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  const pageNumbers: number[] = Array(TOTAL_PAGE_BUTTONS)
    .fill(0)
    .map((_element, index) => currentPage + index);

  return totalPages !== null ? (
    <div className="pagination">
      <ul className="pagination-form">
        {currentPage !== 1 && (
          <>
            <li
              className="pagination-list"
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            >
              <a className="pagination-link"> &laquo; </a>
            </li>
            <li className="pagination-list" onClick={() => dispatch(setCurrentPage(FIRST_PAGE))}>
              <a className="pagination-link">{FIRST_PAGE}</a>
            </li>
            {currentPage > MIN_DISPLAY_PAGES_COUNT && <span>...</span>}
          </>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            className={
              'pagination-list' + (pageNumber === currentPage ? ' pagination-list__active' : '')
            }
            onClick={() => dispatch(setCurrentPage(pageNumber))}
            key={pageNumber}
          >
            <a className="pagination-link">{pageNumber}</a>
          </li>
        ))}
        {totalPages - currentPage - TOTAL_PAGE_BUTTONS > 0 && (
          <>
            <span>...</span>
            <li className="pagination-list" onClick={() => dispatch(setCurrentPage(totalPages))}>
              <a className="pagination-link">{totalPages}</a>
            </li>
          </>
        )}
      </ul>
    </div>
  ) : (
    <></>
  );
}

export default Pagination;
