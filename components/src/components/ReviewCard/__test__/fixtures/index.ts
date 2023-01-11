import { Card } from '../../../../types';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../../../../store/slice/FormReviewSlice';

const getCardFixture = (index: number) => ({
  userName: `name ${index}`,
  rate: index,
  description: `test description ${index}`,
  imgSrc: `src/${index}`,
});

const cards: Card[] = [1, 2, 3].map((index) => getCardFixture(index));

const store = configureStore({
  reducer: { formReviewReducer: reducer },
  preloadedState: { formReviewReducer: { cards } },
});

export default { store };
