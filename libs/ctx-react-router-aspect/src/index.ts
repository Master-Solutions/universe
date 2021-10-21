import { BrowserRouter, Link } from 'react-router-dom';
import { ConfigureFunction } from '@unvrse/context';
import { buildRoutesComponent } from './lib/buildRoutesComponent';

const configure: ConfigureFunction = (ctx, options= {}) => {
  ctx.use({type: 'component', id: 'browser-router', value: BrowserRouter, tags: ['root-wrapper']});

  ctx.use({type: 'component', id: 'router.link', value: Link});
  ctx.use( {type: 'component', id: 'routes', value: buildRoutesComponent(ctx)});
}

export default configure;
