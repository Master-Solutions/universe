import { ConfigureFunction, CTX } from '@unvrse/context';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';

const configure: ConfigureFunction = (ctx, options= {}) => {
  // pages
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'Page1', Page1);
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'Page2', Page2);

  // routes
  ctx.use(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE, 'page-1', { path: '/page-1', exact: true, component: 'Page1' });
  ctx.use(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE, 'page-2', { path: '/page-2', exact: true, component: 'Page2' });

  // menu items
  ctx.use(CTX.TYPE_CONFIG, 'ui.menu.page-1', { title: 'Page 1', to: '/page-1' }).tag('ui.menu');
  ctx.use(CTX.TYPE_CONFIG, 'ui.menu.page-2', { title: 'Page 2', to: '/page-2' }).tag('ui.menu');
}

export default configure;
