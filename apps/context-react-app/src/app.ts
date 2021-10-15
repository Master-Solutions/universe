import { Context } from '@unvrse/context';
import reactAspect from '@unvrse/ctx-react-aspect';
import reactRouterAspect from '@unvrse/ctx-react-router-aspect';

// Context composition (aspects)
const app = new Context();
app.configure(reactAspect, {strict: false});
app.configure(reactRouterAspect);

export default app;
