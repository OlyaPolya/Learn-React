import React from 'react';
import './styles.css';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import { useSelector } from '../../hooks/redux';
import ResultList from './components/ResultList';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import Error from '../../components/Error';
import Bar from './components/Bar';

const Search: React.FC = () => {
  const { photos, isLoading, error } = useSelector((state) => state.photosReducer ?? {});
  const { searchValue } = useSelector((state) => state.searchReducer);

  useFetchPhotos();

  const getSearchComponents = () => (
    <>
      <Sort />
      <ResultList photos={photos} />
      <Pagination />
    </>
  );

  return (
    <div className="search-list">
      <Bar />
      {isLoading && <div className="loading"></div>}
      {photos?.length > 0 && !isLoading && searchValue && getSearchComponents()}
      {photos?.length === 0 && !isLoading && searchValue && <p>Sorry, no result</p>}
      {error && <Error message={error?.message ?? error} />}
    </div>
  );
};

export default Search;
