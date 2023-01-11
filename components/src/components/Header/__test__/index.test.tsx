import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';
import { MemoryRouter } from 'react-router-dom';
import fixtures from './fixtures';

describe('<Header/>', () => {
  it('should match snapshot', () => {
    const component = render(
      <MemoryRouter>
        <Header {...fixtures.props} />
      </MemoryRouter>
    );

    expect(component.container).toMatchSnapshot();
  });
});
