import React, { useCallback, useRef } from 'react';
import { useDispatch } from '../../../../hooks/redux';
import { setCurrentPage, setSearchValue } from '../../../../store/slice/SearchSlice';

const FIRST_PAGE = 1;

function SearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = useCallback(() => {
    if (searchFieldRef.current && searchFieldRef.current.value.length > 0) {
      dispatch(setSearchValue(searchFieldRef.current.value));
      dispatch(setCurrentPage(FIRST_PAGE));
    }
  }, []);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.code === 'Enter' || event.code === 'NumpadEnter') && buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          aria-label="search-input"
          ref={searchFieldRef}
          onKeyDown={onKeyDown}
          placeholder="Nature..."
        />
        <button type="button" className="search-button" onClick={onClick} ref={buttonRef}>
          Search
        </button>
      </div>
    </>
  );
}

export default React.memo(SearchBar);
