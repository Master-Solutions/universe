import reactAspect from './react-aspect';
import { Context } from '@unvrse/context';

describe('reactAspect', () => {
  it('should work', () => {
    const ctx = new Context();
    ctx.use(reactAspect);
    // expect(reactAspect()).toEqual('ctx-react-aspect');
  });
});
