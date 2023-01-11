import {
  TypedUseSelectorHook,
  useDispatch as useDispatchDefault,
  useSelector as useSelectorDefault,
} from 'react-redux';
import { AppDispatch, RootState } from '../store/slice';

export const useDispatch = () => useDispatchDefault<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorDefault;
