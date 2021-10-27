import { Context } from '@unvrse/context';
import React from 'react';

type CtxToPropsFn = (ctx: Context) => Record<string, unknown>;

export const mapCtxToProps = (ctx: Context, propsFn: CtxToPropsFn) => {
  const props = propsFn(ctx);
  return (WrappedComponent: React.FunctionComponent) => {
    return React.createElement(WrappedComponent, { ...props });
  };
};
