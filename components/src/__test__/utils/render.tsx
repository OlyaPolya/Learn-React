import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore } from '../../store/slice';

export const render = (
  ui: React.ReactElement,
  { store, ...renderOptions }: Partial<RenderOptions> & { store: AppStore }
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
};
