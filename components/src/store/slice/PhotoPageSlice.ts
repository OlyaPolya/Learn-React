import { createSlice } from '@reduxjs/toolkit';

type PhotoState = {
  server: string;
  id: string;
  secret: string;
  title: string;
  description: {
    _content: string;
  };
  views: string;
  ownername: string;
};

const initialState: PhotoState = {
  server: '',
  id: '',
  secret: '',
  title: '',
  description: {
    _content: '',
  },
  ownername: '',
  views: '',
};

export const photoPageSlice = createSlice({
  name: 'Photo',
  initialState,
  reducers: {
    setPhotoPage: (state: PhotoState, action) => ({
      ...state,
      server: action.payload.server,
      id: action.payload.id,
      secret: action.payload.secret,
      title: action.payload.title,
      description: action.payload.description,
      ownername: action.payload.ownername,
      views: action.payload.views,
    }),
  },
});

export default photoPageSlice.reducer;
export const { setPhotoPage } = photoPageSlice.actions;
