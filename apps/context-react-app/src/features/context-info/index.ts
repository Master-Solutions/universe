import { ConfigureFunction } from '@unvrse/context';
import { ContextPage } from './ContextPage';

const configure: ConfigureFunction = (ctx, options= {}) => {
  // pages
  ctx.use({type: 'component', id: 'pages.context', value: ContextPage});

  // routes
  ctx.use({type: 'route', id: 'context', value: { path: '/context', exact: true, component: 'pages.context' }});

  // menu items
  ctx.use({type: 'config', id: 'ui.menu.context', value: { title: 'Context', to: '/context' }, tags: ['ui.menu']});
}

export default configure;
