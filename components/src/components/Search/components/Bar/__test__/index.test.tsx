import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '..';
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { initialState } from '../../../../../__test__/components/fixtures/SearchBar';

describe('<SearchBar />', () => {
  const reactRedux = { useDispatch, useSelector };
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  afterAll(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    store = mockStore(initialState);
    const component = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it('should set search request to store', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchRequest = 'picture';
    userEvent.type(screen.getByPlaceholderText('Nature...'), searchRequest);
    userEvent.click(screen.getByRole('button'));
    const [action] = store.getActions();
    expect(action.payload).toBe(searchRequest);
  });

  it('should not set empty request to store', () => {
    store = mockStore(initialState);
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    store.dispatch = mockDispatch;
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    userEvent.click(screen.getByRole('button'));

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
