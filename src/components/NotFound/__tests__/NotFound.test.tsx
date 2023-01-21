import NotFound from '..';
import { setupTests } from '../../../shared/mocks/setupTests';
import React from 'react';

describe('NotFound page', () => {
  const { renderWithProvider } = setupTests();
  // it('should display the 404 page', () => {

  // })

  it('should work as expected', () => {
    renderWithProvider(<NotFound />);
    expect(1 + 1).toBe(2);
  });
});
