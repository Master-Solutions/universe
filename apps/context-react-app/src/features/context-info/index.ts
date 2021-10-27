import { ConfigureFunction, CTX } from '@unvrse/context';
import { ContextPage } from './ContextPage';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';

const configure: ConfigureFunction = (ctx, options= {}) => {
  // pages
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'ContextPage', ContextPage);

  // routes
  ctx.use(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE, 'context', { path: '/context', exact: true, component: 'ContextPage' });

  // menu items
  ctx.use(CTX.TYPE_CONFIG,'ui.menu.context', { title: 'Context', to: '/context' }).tag('ui.menu');
}

export default configure;
