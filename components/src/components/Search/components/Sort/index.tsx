import { useDispatch, useSelector } from 'hooks/redux';
import React, { useRef } from 'react';
import { setPerPage, setSortType } from '../../../../store/slice/SearchSlice';

const PER_PAGE_ELEMENTS = {
  elements20: 20,
  elements40: 40,
  elements60: 60,
};

function Sort(): JSX.Element {
  const { perPage, sortType } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const sortTypeRef = useRef<HTMLSelectElement>(null);

  function handleSortSelect() {
    if (sortTypeRef.current) {
      dispatch(setSortType(sortTypeRef.current.value));
    }
  }
  return (
    <div className="filters">
      <div className="result-per-page">
        <span className="per-page-title">Per page</span>
        <div className="per-page-buttons">
          <button
            type="button"
            className={
              'button-per-page ' +
              (perPage === PER_PAGE_ELEMENTS.elements20 ? 'button-per-page__active' : '')
            }
            onClick={() => dispatch(setPerPage(PER_PAGE_ELEMENTS.elements20))}
          >
            20
          </button>
          <button
            type="button"
            className={
              'button-per-page ' +
              (perPage === PER_PAGE_ELEMENTS.elements40 ? 'button-per-page__active' : '')
            }
            onClick={() => dispatch(setPerPage(PER_PAGE_ELEMENTS.elements40))}
          >
            40
          </button>
          <button
            type="button"
            className={
              'button-per-page ' +
              (perPage === PER_PAGE_ELEMENTS.elements60 ? 'button-per-page__active' : '')
            }
            onClick={() => dispatch(setPerPage(PER_PAGE_ELEMENTS.elements60))}
          >
            60
          </button>
        </div>
      </div>
      <div className="sorting">
        <p className="sorting_title">Sort by</p>
        <select
          className="sorting_select"
          value={sortType}
          ref={sortTypeRef}
          onChange={handleSortSelect}
        >
          <option value="relevance">Relevance</option>
          <option value="date-posted-asc">Date posted asc</option>
          <option value="date-posted-desc">Date posted desc</option>
          <option value="interestingness-desc">Interestingness desc</option>
          <option value="interestingness-asc"> Interestingness asc</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
