import { StrictMode } from 'react';
import { ConfigureFunction } from '@unvrse/context';
import { buildRootComponent } from './lib/build-root-component';
import { ComponentResource } from './lib/component-resource';
import { ComposeHocsBehavior } from './lib/compose-hocs-behavior';
import { buildMount } from './lib/build-mount';
import { CTX_REACT_ASPECT } from './lib/constants';
import { buildAppProvider } from './lib/build-app-provider';

export * from './lib/app-context';
export * from './lib/constants';


const configure: ConfigureFunction = (ctx) => {
  ctx.registerType<ComponentResource>(CTX_REACT_ASPECT.TYPE_COMPONENT, {
    resourceClass: ComponentResource,
    behaviors: [new ComposeHocsBehavior()]
  });

  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ASPECT.ID_STRICT_MODE, StrictMode).tag(CTX_REACT_ASPECT.TAG_ROOT_WRAPPER);
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ASPECT.ID_APP_PROVIDER, buildAppProvider(ctx)).tag(CTX_REACT_ASPECT.TAG_ROOT_WRAPPER);
  ctx.use(CTX_REACT_ASPECT.TYPE_COMPONENT, CTX_REACT_ASPECT.ID_ROOT, buildRootComponent(ctx));

  ctx.use(CTX_REACT_ASPECT.TYPE_API, CTX_REACT_ASPECT.ID_MOUNT, buildMount(ctx));
}

export default configure;
