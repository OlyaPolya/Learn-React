import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchPhotosSearch from '../../components/Search/fetchSearch';
import { act } from 'react-dom/test-utils';
import {
  propsFixture,
  providerPropsFixture,
} from '../../../__test__/components/fixtures/SearchFetch';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

describe('<FetchPhotosSearch />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  afterAll(() => {
    cleanup();
  });

  it('should match Snapshot', async () => {
    const mockJsonPromise = Promise.resolve(propsFixture);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const store = mockStore(propsFixture);
    const reactRedux = { useDispatch, useSelector };
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    let component = null;
    await act(async () => {
      component = render(
        <Provider store={store}>
          <FetchPhotosSearch />
        </Provider>
      );
    });

    const component = render(
      <Provider store={store}>
        <FetchPhotosSearch />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should show a message when there are no search results', async () => {
    const mockJsonPromise = Promise.resolve({
      photos: {
        page: 1,
        pages: 1,
        perpage: 10,
        total: 1,
        photos: {
          page: 1,
          pages: 1,
          perpage: 10,
          total: 1,
          photo: [],
        },
      },
    });
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const store = mockStore(providerPropsFixture);

    await act(async () => {
      render(
        <Provider store={store}>
          <FetchPhotosSearch />
        </Provider>
      );
    });

    screen.logTestingPlaygroundURL();
    //expect(screen.getByText('Sorry, no result')).toBeInTheDocument();
  });

  it('should call fetch in componentDidMount', async () => {
    const mockJsonPromise = Promise.resolve(propsFixture);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    await act(async () => {
      render(<FetchPhotosSearch />);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a878977d69bd49afb645f6ab6eca4065&format=json&extras=description,owner_name,views&media=photos&sort=relevance&per_page=60&page=1&privacy_filter=1&text=&nojsoncallback=1'
    );
  });
});
