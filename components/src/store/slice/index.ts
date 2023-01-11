import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { photosSlice } from './PhotosSlice';
import { photoPageSlice } from './PhotoPageSlice';
import { formReviewSlice } from './FormReviewSlice';
import { formSlice } from './FormSlice';
import { searchSlice } from './SearchSlice';

const { reducer: photosReducer } = photosSlice;
const { reducer: photoPageReducer } = photoPageSlice;
const { reducer: formReviewReducer } = formReviewSlice;
const { reducer: formSliceReducer } = formSlice;
const { reducer: searchReducer } = searchSlice;

const rootReducer = combineReducers({
  photosReducer,
  photoPageReducer,
  formReviewReducer,
  formSliceReducer,
  searchReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
