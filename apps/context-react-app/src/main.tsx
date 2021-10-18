import App from './app/App';
import { Context } from '@unvrse/context';
import reactAspect from '@unvrse/ctx-react-aspect';
import reactRouterAspect from '@unvrse/ctx-react-router-aspect';
import { MainLayout } from './components/layouts/MainLayout';

// Context composition (aspects)
const app = new Context();
app.configure(reactAspect);
app.configure(reactRouterAspect);

// App Functionality
app.use({type: 'component', id: 'layout.main', value: MainLayout, tags: ['root-wrapper']});
app.use({type: 'component', id: 'app', value: App});

// bootstrap
app.run('mount');


