import { Context } from '@unvrse/context';
import reactAspect, { CTX_REACT_ASPECT } from '@unvrse/ctx-react-aspect';
import reduxAspect from '@unvrse/ctx-react-redux-aspect';
import reactRouterAspect from '@unvrse/ctx-react-router-aspect';
import somePages from './features/some-pages';
import contextInfo from './features/context-info';
import reduxTest from './features/redux-test';
import tailwindSamples from './features/tailwind-samples';
import { APP } from './constants';
import { CTX_REACT_ROUTER_ASPECT } from '@unvrse/ctx-react-router-aspect';
import { PrimaryLayout } from './features/mega-layout/primary-layout';

import './styles.scss';

// Context composition (aspects)
const app = new Context();
app.configure(reactAspect);
app.configure(reduxAspect);
app.configure(reactRouterAspect);

// App Functionality
// app
//   .use(CTX_REACT_ASPECT.TYPE_COMPONENT, APP.ID_LAYOUT_PRIMARY, PrimaryLayout)
//   .tag(CTX_REACT_ASPECT.TAG_ROOT_WRAPPER);
app
  .use(
    CTX_REACT_ASPECT.TYPE_COMPONENT,
    APP.ID_APP,
    CTX_REACT_ROUTER_ASPECT.ID_ROUTES
  )
  .asAlias();

app.configure(somePages);
app.configure(contextInfo);
app.configure(reduxTest);
app.configure(tailwindSamples);

// bootstrap
app.run('mount');
