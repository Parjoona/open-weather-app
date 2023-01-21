import NotFound from '..';
import { setupTests } from '../../../shared/mocks/setupTests';
import { act, fireEvent, screen } from '@testing-library/react';

describe('NotFound page', () => {
  const { renderWithProvider } = setupTests();

  it('should work as expected', () => {
    renderWithProvider(<NotFound />);
    // check if NotFound exists
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Page was not found'
    );

    expect(screen.getByText('Here')).toBeInTheDocument();
  });

  it('should navigate to / on button press', async () => {
    renderWithProvider(<NotFound />, { route: '/settings' });
    const button = screen.getByRole('link');
    await act(() => fireEvent.click(button));
    expect(window.location.pathname).toBe('/');
  });
});
