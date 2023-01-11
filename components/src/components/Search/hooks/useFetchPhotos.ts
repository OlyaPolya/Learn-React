import { useEffect, useRef } from 'react';
import { makeRequest } from '../../../store/actions';
import { useDispatch, useSelector } from '../../../hooks/redux';

type SearchRequest = {
  value: string;
};

export const useFetchPhotos = () => {
  const dispatch = useDispatch();
  const { searchValue, perPage, currentPage, sortType } = useSelector(
    (state) => state.searchReducer || {}
  );

  const request = useRef<SearchRequest>({ value: '' });

  useEffect(() => {
    if (!searchValue || request.current?.value === searchValue) return;

    request.current.value = searchValue;
    dispatch(makeRequest({ searchValue, perPage, currentPage, sortType }));
  }, [searchValue, perPage, currentPage, sortType, dispatch]);
};
