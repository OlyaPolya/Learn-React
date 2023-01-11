import { PhotosList } from '../../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getURL } from '../../utils/getUrl';

const BASE_URL = 'https://api.flickr.com/services/rest/?';

type MakeRequest = {
  baseUrl: string;
  searchValue: string;
  perPage: number;
  currentPage: number;
  sortType: string;
};

export const makeRequest = createAsyncThunk<
  PhotosList,
  Omit<MakeRequest, 'baseUrl'>,
  { rejectValue: string }
>('photos/fetch', async ({ searchValue, perPage, currentPage, sortType }, { rejectWithValue }) => {
  try {
    const url = getURL<MakeRequest>({
      baseUrl: BASE_URL,
      searchValue,
      perPage,
      currentPage,
      sortType,
    });

    const response = await fetch(url);
    const data = (await response.json()) as PhotosList;

    return data;
  } catch (error) {
    return rejectWithValue('Failed to get data from server');
  }
});
