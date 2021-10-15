import { BrowserRouter } from 'react-router-dom';
import { ConfigureFunction } from '@unvrse/context';

const configure: ConfigureFunction = (ctx, options= {}) => {
  ctx.use({
    type: 'component',
    id: 'browser-router',
    value: BrowserRouter,
    tags: [{name: 'RootProvider', value: ''}]
  })
}

export default configure;
