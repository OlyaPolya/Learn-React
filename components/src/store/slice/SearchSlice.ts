import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_CARDS_COUNT = 20;

const initialState = {
  searchValue: '',
  perPage: DEFAULT_CARDS_COUNT,
  currentPage: 1,
  sortType: 'relevance',
};

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => ({
      ...state,
      searchValue: action.payload,
    }),
    setPerPage: (state, action) => ({
      ...state,
      perPage: action.payload,
    }),
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
    setSortType: (state, action) => ({
      ...state,
      sortType: action.payload,
    }),
  },
});

export default searchSlice.reducer;
export const { setCurrentPage, setPerPage, setSearchValue, setSortType } = searchSlice.actions;
