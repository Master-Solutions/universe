import AppLayout from './layouts/AppLayout';
import Sidebar from './components/Sidebar';
import menuItems from './data/menuItems';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';



export function App() {
  return (
    <BrowserRouter>
      <AppLayout
        sidebarPane={
          <Sidebar items={menuItems} />
        }>
        <Routes />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
