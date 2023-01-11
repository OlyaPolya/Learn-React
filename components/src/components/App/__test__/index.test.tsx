import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import App from '..';
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  it('should match snapshot', () => {
    const component = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
});
