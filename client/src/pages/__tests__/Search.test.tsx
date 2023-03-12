import { setupServer } from 'msw/node';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../Search/Search';
import { MemoryRouter } from 'react-router-dom';
import { dummyProducts, productsRequestHandlers } from '../../data/productsRequestHandlers';
import { act } from 'react-dom/test-utils';

const server = setupServer(...productsRequestHandlers);

describe('Search Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should render list of products', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search />
        </MemoryRouter>,
      );
    });

    const productTitle = await screen.findByText(dummyProducts[0].title);
    expect(productTitle).toBeInTheDocument();
    const totalProducts = await screen.findByTestId('total-products');
    expect(totalProducts).toHaveTextContent(`${dummyProducts.length}`);
  });

  test('should render list of products sorted by price high to low', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search />
        </MemoryRouter>,
      );
    });

    await screen.findByText(dummyProducts[0].title);

    const sortingButtonHTL = document.querySelector('[data-testid=btn-sort-htl]');
    act(() => {
      sortingButtonHTL?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect([...(await screen.findAllByTestId('product-price'))].map(el => +(el.textContent as string))).toStrictEqual(
      dummyProducts.map(el => el.price).sort((a, b) => b - a),
    );
  });

  test('should render list of products sorted by price low to high', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search />
        </MemoryRouter>,
      );
    });

    await screen.findByText(dummyProducts[0].title);

    const sortingButtonLTH = document.querySelector('[data-testid=btn-sort-lth]');
    act(() => {
      sortingButtonLTH?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect([...(await screen.findAllByTestId('product-price'))].map(el => +(el.textContent as string))).toStrictEqual(
      dummyProducts.map(el => el.price).sort((a, b) => a - b),
    );
  });

  test('should render list of products sorted by popular filtered by Red and Black with min price 120', async () => {
    const filterColors = ['Red', 'Black'];
    const minPrice = 120;
    const filteredProducts = dummyProducts
      .sort((a, b) => b.rating - a.rating)
      .filter(({ color }) => filterColors.includes(color))
      .filter(({ price }) => price >= minPrice);

    act(() => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search />
        </MemoryRouter>,
      );
    });

    await screen.findByText(dummyProducts[0].title);

    const sortingButtonPopular = document.querySelector('[data-testid=btn-sort-popular]');
    const checkboxRed = document.querySelector(`[data-testid=filter-by-${filterColors[0].toLowerCase()}]`);
    const checkboxBlack = document.querySelector(`[data-testid=filter-by-${filterColors[1].toLowerCase()}]`);
    const minPriceInput = document.querySelector('[data-testid=filter-by-min-price]');

    act(() => {
      fireEvent.click(sortingButtonPopular as Element);
      fireEvent.click(checkboxRed as Element);
      fireEvent.click(checkboxBlack as Element);
      fireEvent.change(minPriceInput as Element, { target: { value: '120' } });
    });

    const productsPrice = await screen.findAllByTestId('product-price');
    const productsRating = await screen.findAllByTestId('product-rating');
    const productsColors = await screen.findAllByTestId('product-color');
    expect([...productsRating].map(el => +(el.textContent as string))).toStrictEqual(
      filteredProducts.map(({ rating }) => rating)
    );
    expect([...productsPrice].map(el => +(el.textContent as string))).toStrictEqual(
      filteredProducts.map(({ price }) => price)
    );
    expect([...productsColors].map(el => el.textContent)).toStrictEqual(
      filteredProducts.map(({ color }) => color)
    );
  });

  test('should render list of products filtered by Red', async () => {
    const filterColors = ['Red', 'Black'];

    act(() => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search />
        </MemoryRouter>,
      );
    });

    await screen.findByText(dummyProducts[0].title);

    const checkboxRed = document.querySelector(`[data-testid=filter-by-${filterColors[0].toLowerCase()}]`);
    const checkboxBlack = document.querySelector(`[data-testid=filter-by-${filterColors[1].toLowerCase()}]`);

    act(() => {
      fireEvent.click(checkboxRed as Element);
    });

    expect([...(await screen.findAllByTestId('product-color'))].map(el => el.textContent)).toStrictEqual(
      dummyProducts.map(({ color }) => color).filter(color => [filterColors[0]].includes(color)),
    );

    // add Black color to filters
    act(() => {
      fireEvent.click(checkboxBlack as Element);
    });

    expect([...(await screen.findAllByTestId('product-color'))].map(el => el.textContent)).toStrictEqual(
      dummyProducts.map(({ color }) => color).filter(color => filterColors.includes(color)),
    );

    // remove Red color from filters
    act(() => {
      fireEvent.click(checkboxRed as Element);
    });

    expect([...(await screen.findAllByTestId('product-color'))].map(el => el.textContent)).toStrictEqual(
      dummyProducts.map(({ color }) => color).filter(color => [filterColors[1]].includes(color)),
    );
  });
});
