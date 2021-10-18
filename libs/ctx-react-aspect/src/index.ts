import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ConfigureFunction, Context } from '@unvrse/context';
import RootComponent from './lib/RootComponent';
import { buildRootComponent } from './lib/buildRootComponent';

const mount = (ctx: Context) => {
  return ({elementId = 'root', rootComponentId = 'root'}) => {
    const r = ctx.store.getByTypeAndId('component', rootComponentId);
    if (!r) throw new Error(`Component with id '${rootComponentId}' not found`);
    ReactDOM.render(React.createElement(r.value), document.getElementById(elementId))
  }
}

const configure: ConfigureFunction = (ctx, { strict = true }) => {
  // ctx.useAspect('component');
  if (strict) {
    ctx.use({type: 'component', id: 'strict-mode', value: StrictMode, tags: ['root-wrapper']})
  }
  ctx.use({type: 'api', id: 'mount', value: mount(ctx)});
  ctx.use( {type: 'component', id: 'root', value: buildRootComponent(ctx)})
}

export default configure;
