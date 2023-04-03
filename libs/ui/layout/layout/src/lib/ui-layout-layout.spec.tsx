import { render } from '@testing-library/react';

import UiLayoutLayout from './ui-layout-layout';

describe('UiLayoutLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutLayout />);
    expect(baseElement).toBeTruthy();
  });
});
