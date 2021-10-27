import { ConfigureFunction } from '@unvrse/context';
import { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import { buildReduxProvider } from './build-redux-provider';
import { CTX_REDUX_ASPECT } from './lib/constants';

export * from './lib/constants';

const configure: ConfigureFunction = (ctx, options= {}) => {
  ctx.registerType(CTX_REDUX_ASPECT.TYPE_RTK_SLICE);
  ctx.registerType(CTX_REDUX_ASPECT.TYPE_REDUCER);
  ctx.registerType(CTX_REDUX_ASPECT.TYPE_SELECTOR);

  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, 'ReduxProvider', buildReduxProvider(ctx)).tag(CTX_REACT_ASPECT.TAG_ROOT_WRAPPER);
}

export default configure;
