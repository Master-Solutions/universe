import { Context } from '@unvrse/context';
import React, { PropsWithChildren } from 'react';

const AppCtx = React.createContext<Context | null>(null);

const buildAppProvider = (ctx: Context) => {
  return ({children}: PropsWithChildren<Record<string, unknown>>) => React.createElement(AppCtx.Provider, {value: ctx}, children);
}
const useAppCtx = () => {
  return React.useContext(AppCtx) as unknown as Context;
}

const useTypeResources = (type: string, tags: string[] = []) => {
  const app = useAppCtx();
  return app.store.findByTypeAndTags(type, tags); //.map(r => r.value);
}

const useResource = (type: string, id: string) => {
  const app = useAppCtx();
  return app.store.getByTypeAndId(type, id); //.value;
}

export {
  AppCtx,
  buildAppProvider,
  useAppCtx,
  useTypeResources,
  useResource
}
