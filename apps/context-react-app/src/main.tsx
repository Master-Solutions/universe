import App from './App';
import { Context } from '@unvrse/context';
import reactAspect from '@unvrse/ctx-react-aspect';
import reactRouterAspect from '@unvrse/ctx-react-router-aspect';
import { MainLayout } from './components/layouts/MainLayout';
import somePages from './features/some-pages';
import contextInfo from './features/context-info';

// Context composition (aspects)
const app = new Context();
app.use(reactAspect);
app.use(reactRouterAspect);

// App Functionality
app.use({type: 'component', id: 'layout.main', value: MainLayout, tags: ['root-wrapper']});
app.use({type: 'component', id: 'app', value: app.store.getByTypeAndId('component', 'routes').value});

app.use(somePages);
app.use(contextInfo);

// bootstrap
app.run('mount');


