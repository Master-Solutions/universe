import React from 'react';
import { Context } from '@unvrse/context';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';

const AppCtx = React.createContext<Context | null>(null);

const useAppCtx = () => {
  return React.useContext(AppCtx) as unknown as Context;
}

const useTypeResources = (type: string, tags: string[] = []) => {
  const app = useAppCtx();
  return app.store.findByTags(type, tags);
}

const useResource = (type: string, id: string) => {
  const app = useAppCtx();
  return app.store.getById(type, id).getValue();
}

const useComponent = (id: string) => {
  return useResource(CTX_REACT_ASPECT.TYPE_COMPONENT, id);
}

export {
  AppCtx,
  useAppCtx,
  useTypeResources,
  useResource,
  useComponent
}
