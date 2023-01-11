import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Card } from 'types';

type ReviewState = {
  cards: Card[];
};

export const initialState: ReviewState = {
  cards: [],
};

export const formReviewSlice = createSlice({
  name: 'Review',
  initialState,
  reducers: {
    setReview(state, action: PayloadAction<Card>) {
      state.cards.push(action.payload);
    },
  },
});

export default formReviewSlice.reducer;
export const { setReview } = formReviewSlice.actions;
