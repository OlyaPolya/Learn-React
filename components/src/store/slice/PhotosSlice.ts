import { createSlice } from '@reduxjs/toolkit';
import type { Photo } from '../../types';
import { makeRequest } from '../actions';

type PhotosState = {
  photos: Photo[];
  totalPages: number;
  isLoading: boolean;
  error?: Error;
};

const initialState: PhotosState = {
  photos: [],
  totalPages: 0,
  isLoading: false,
  error: undefined,
};

export const photosSlice = createSlice({
  name: 'Photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(makeRequest.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(makeRequest.fulfilled, (state, action) => ({
      ...state,
      photos: action.payload.photos.photo,
      totalPages: action.payload.photos.pages,
      isLoading: false,
      error: undefined,
    }));
    builder.addCase(makeRequest.rejected, (state, action) => ({
      ...state,
      photos: [],
      totalPages: 0,
      isLoading: false,
      error: action.payload
        ? new Error(action.payload)
        : new Error('Failed to load data from server'),
    }));
  },
});

export default photosSlice.reducer;
