import { ConfigureFunction, CTX } from '@unvrse/context';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { SamplesPage } from './SamplesPage';

const configure: ConfigureFunction = (ctx, options= {}) => {
  // pages
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'SamplesPage', SamplesPage);
  // routes
  ctx.use(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE, 'samples', { path: '/samples', exact: true, component: 'SamplesPage' });

  // menu items
  ctx.use(CTX.TYPE_CONFIG, 'ui.menu.samples', { title: 'Samples', to: '/samples' }).tag('ui.menu');
}

export default configure;
