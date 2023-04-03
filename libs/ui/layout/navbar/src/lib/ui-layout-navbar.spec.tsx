import { render } from '@testing-library/react';

import UiLayoutNavbar from './ui-layout-navbar';

describe('UiLayoutNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
