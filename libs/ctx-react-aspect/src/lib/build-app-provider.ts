import { Context } from '@unvrse/context';
import React, { PropsWithChildren } from 'react';
import { AppCtx } from '@unvrse/ctx-react-aspect';

const buildAppProvider = (ctx: Context) => {
  return ({ children }: PropsWithChildren<Record<string, unknown>>) => React.createElement(AppCtx.Provider, { value: ctx }, children);
};
export { buildAppProvider };
