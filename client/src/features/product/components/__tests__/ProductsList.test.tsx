import { render, screen } from '@testing-library/react';
import { ProductsList } from '../../ProductsList';
import {  productsRequestHandlers } from '../../../../data/productsRequestHandlers';
import { setupServer } from 'msw/lib/node';

const server = setupServer(...productsRequestHandlers);

describe('ProductList Component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should show loader', async () => {
    render(<ProductsList />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
