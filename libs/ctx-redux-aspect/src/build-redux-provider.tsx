import React from 'react';
import { Context } from '@unvrse/context';
import { configureStore } from './lib/configure-store';
import { Provider } from 'react-redux';

export const buildReduxProvider = (ctx: Context) => {
  const ReduxProvider = ({children}: JSX.ElementChildrenAttribute) => {
    const store = configureStore(ctx);
    // console.log("Store:", store);
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  };
  return ReduxProvider;
};
