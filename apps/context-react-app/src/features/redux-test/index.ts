import { ConfigureFunction, CTX } from '@unvrse/context';
import { CounterPage } from './CounterPage';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { CTX_REDUX_ASPECT } from '@unvrse/ctx-react-redux-aspect';
import { selectCount, slice } from './slice';

const configure: ConfigureFunction = (ctx, options = {}) => {
  ctx.use(CTX_REDUX_ASPECT.TYPE_RTK_SLICE, slice.name, slice);

  // selectors
  ctx.use(CTX_REDUX_ASPECT.TYPE_SELECTOR, 'selectCount', selectCount);

  // pages
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'CounterPage', CounterPage);

  // routes
  ctx.use(CTX_REACT_ROUTER_ASPECT.TYPE_ROUTE, 'redux', {
    path: '/redux',
    exact: true,
    component: 'CounterPage',
  });

  // menu items
  ctx
    .use(CTX.TYPE_CONFIG, 'ui.menu.redux', { title: 'Redux', to: '/redux' })
    .tag('ui.menu');
};

export default configure;
