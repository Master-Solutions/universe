import { BrowserRouter, Link } from 'react-router-dom';
import { ConfigureFunction } from '@unvrse/context';
import { buildRoutesComponent } from './lib/build-routes-component';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { CTX_REACT_ROUTER_ASPECT } from './lib/constants';

export * from './lib/constants';

const configure: ConfigureFunction = (ctx, options= {}) => {
  ctx.registerType(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE);

  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ROUTER_ASPECT.ID_BROWSER_ROUTER, BrowserRouter).tag(CTX_REACT_ASPECT.TAG_ROOT_WRAPPER);
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ROUTER_ASPECT.ID_LINK, Link);
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ROUTER_ASPECT.ID_ROUTES, buildRoutesComponent(ctx));
}

export default configure;
