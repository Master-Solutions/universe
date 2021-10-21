import { ConfigureFunction } from '@unvrse/context';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

const configure: ConfigureFunction = (ctx, options= {}) => {
  // pages
  ctx.use({type: 'component', id: 'pages.page-1', value: Page1});
  ctx.use({type: 'component', id: 'pages.page-2', value: Page2});

  // routes
  ctx.use({type: 'route', id: 'page-1', value: { path: '/page-1', exact: true, component: 'pages.page-1' }});
  ctx.use({type: 'route', id: 'page-2', value: { path: '/page-2', exact: true, component: 'pages.page-2' }});

  // menu items
  ctx.use({type: 'config', id: 'ui.menu.page-1', value: { title: 'Page 1', to: '/page-1' }, tags: ['ui.menu']});
  ctx.use({type: 'config', id: 'ui.menu.page-2', value: { title: 'Page 2', to: '/page-2' }, tags: ['ui.menu']});
}

export default configure;
