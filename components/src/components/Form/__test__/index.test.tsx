import React from 'react';
import '@testing-library/jest-dom';
import Form from '..';
import fireEvent from '@testing-library/user-event';
import { render } from '../../../__test__/utils/render';
import fixtures from './fixtures';

describe('<Form />', () => {
  const dispatchMock = jest.fn();

  beforeAll(() => {
    fixtures.store.dispatch = dispatchMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should match snapshot', () => {
    const component = render(<Form />, { store: fixtures.store });

    expect(component).toMatchSnapshot;
  });

  it('should not to be render review card and show error message with incorrect fields', () => {
    const component = render(<Form />, { store: fixtures.store });
    fireEvent.type(component.getByPlaceholderText('Your name...'), 'GY');
    fireEvent.click(component.getByRole('button'));

    expect(component.getByText('Name must be more then 2 characters long')).toBeInTheDocument();
  });

  it('should set correct values from the input fields to state', () => {
    const testUserName = 'Test Name';
    const testDescription = 'Test Description';
    const actionType = 'Rate/setUserName';

    const component = render(<Form />, { store: fixtures.store });
    fireEvent.type(component.getByPlaceholderText('Your name...'), testUserName);
    fireEvent.type(component.getByPlaceholderText('Description...'), testDescription);
    fireEvent.click(component.getByRole('button', { name: /add review/i }));

    expect(fixtures.store.dispatch).toHaveBeenCalledWith({
      payload: expect.any(String),
      type: actionType,
    });
  });
});
