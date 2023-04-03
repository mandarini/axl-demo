import { render } from '@testing-library/react';

import UiCard from './ui-card';

describe('UiCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCard />);
    expect(baseElement).toBeTruthy();
  });
});
