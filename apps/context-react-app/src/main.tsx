import app from './app';
import App from './app/App';

// App Functionality
app.use({type: 'component', id: 'root', value: App});

// bootstrap
app.run('mount');


