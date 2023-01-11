import { configureStore } from '@reduxjs/toolkit';
import { initialState } from '../../../../store/slice/FormSlice';
import reducer from '../../../../store/slice/FormSlice';

const store = configureStore({
  reducer: { formSliceReducer: reducer },
  preloadedState: { formSliceReducer: initialState },
});

export default { store };
