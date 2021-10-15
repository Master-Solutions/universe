import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import RootComponent from './lib/RootComponent';
import { ConfigureFunction } from '@unvrse/context';

const configure: ConfigureFunction = (ctx, { strict = true }) => {
  // ctx.useAspect('component');
  if (strict) {
    ctx.use({
      type: 'component',
      id: 'strict-mode',
      value: StrictMode,
      tags: [{name: 'RootWrapper', value: ''}]
    })
  }
  ctx.use({
    type: 'api',
    id: 'mount',
    value: ({elementId = 'root', rootComponentId = 'root'}) => {
      const r = ctx.store.getByTypeAndId('component', rootComponentId);
      if (!r) throw new Error(`Component with id '${rootComponentId}' not found`);
      ReactDOM.render(React.createElement(r.value), document.getElementById(elementId))
    }
  });
  //ctx.use( {type: 'component', id: 'root', value: RootComponent})
}

export default configure;
