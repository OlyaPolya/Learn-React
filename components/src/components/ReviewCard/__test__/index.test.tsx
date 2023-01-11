import React from 'react';
import { render } from '../../../__test__/utils/render';
import ReviewCards from '..';
import fixtures from './fixtures';

describe('<Header/>', () => {
  it('should match snapshot', () => {
    const component = render(<ReviewCards />, { store: fixtures.store });

    expect(component.container).toMatchSnapshot();
  });
});
