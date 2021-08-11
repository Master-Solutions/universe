import { render } from '@testing-library/react';

import LayoutBlocks from './LayoutBlocks';

describe('LayoutBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
