import { render, screen } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('renders sort buttons', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const sortingButton1 = screen.getByTestId('btn-sort-htl');
    expect(sortingButton1).toHaveTextContent(/Price High to Low/i);
    const sortingButton2 = screen.getByTestId('btn-sort-lth');
    expect(sortingButton2).toHaveTextContent(/Price Low to High/i);
    const sortingButton3 = screen.getByTestId('btn-sort-popular');
    expect(sortingButton3).toHaveTextContent(/popular first/i);
  });

  test('landing on a bad page', () => {
    const badRoute = '/some/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/oops/i)).toBeInTheDocument();
  });
});
