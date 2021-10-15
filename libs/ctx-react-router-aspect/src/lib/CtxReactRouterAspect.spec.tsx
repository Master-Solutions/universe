import { render } from '@testing-library/react';

import CtxReactRouterAspect from './CtxReactRouterAspect';

describe('CtxReactRouterAspect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtxReactRouterAspect />);
    expect(baseElement).toBeTruthy();
  });
});
