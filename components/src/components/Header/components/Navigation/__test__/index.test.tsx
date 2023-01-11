import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Navigation from '..';
import { MemoryRouter } from 'react-router-dom';
import fixtures from '../../../__test__/fixtures';

describe('<Header/>', () => {
  it('should match snapshot', () => {
    const component = render(
      <MemoryRouter>
        <Navigation {...fixtures.props} />
      </MemoryRouter>
    );

    expect(component.container).toMatchSnapshot();
  });

  it('should click on link', () => {
    const component = render(
      <MemoryRouter>
        <Navigation {...fixtures.props} />
      </MemoryRouter>
    );
    const link = component.getByText('Test2');
    fireEvent.click(link);

    expect(link.getAttribute('href')).toEqual('/test');
  });
});
