import { createSlice } from '@reduxjs/toolkit';
import { MAX_RATE } from '../../constants';

type FormState = {
  userName: string;
  rate: number;
  description: string;
  imgSrc: string;
  buttonState: boolean;
};

const DEFAULT_VALUES = {
  rate: MAX_RATE,
};

export const initialState: FormState = {
  userName: '',
  rate: DEFAULT_VALUES.rate,
  description: '',
  imgSrc: '',
  buttonState: true,
};

export const formSlice = createSlice({
  name: 'Rate',
  initialState,
  reducers: {
    setUserName: (state, action) => ({
      ...state,
      userName: action.payload,
    }),
    setRate: (state, action) => ({
      ...state,
      rate: action.payload,
    }),
    setDescription: (state, action) => ({
      ...state,
      description: action.payload,
    }),
    setImgSrc: (state, action) => ({
      ...state,
      imgSrc: action.payload,
    }),
    setButtonState: (state, action) => ({
      ...state,
      buttonState: action.payload,
    }),
    setResetForm: () => ({
      ...initialState,
    }),
  },
});

export default formSlice.reducer;
export const { setUserName, setRate, setDescription, setImgSrc, setButtonState, setResetForm } =
  formSlice.actions;
