import { act, fireEvent, screen } from '@testing-library/react';
import { setupTests } from 'shared/mocks/setupTests';
import Links from '../Links';

describe('AppMenu', () => {
  const { renderWithProvider } = setupTests();

  describe('AppMenu - Links', () => {
    it('should render the links', () => {
      renderWithProvider(<Links />);

      expect(
        screen.getByRole('link', { name: 'Dashboard' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Saved Locations' })
      ).toBeInTheDocument();
    });

    it('should navigate from /settings to /', async () => {
      renderWithProvider(<Links />, { route: '/settings' });
      const button = screen.getByRole('link', { name: 'Dashboard' });
      await act(() => fireEvent.click(button));
      expect(window.location.pathname).toBe('/');
    });

    it('should navigate from / to /saved', async () => {
      renderWithProvider(<Links />);
      const button = screen.getByRole('link', { name: 'Saved Locations' });
      await act(() => fireEvent.click(button));
      expect(window.location.pathname).toBe('/saved');
    });
  });
});
