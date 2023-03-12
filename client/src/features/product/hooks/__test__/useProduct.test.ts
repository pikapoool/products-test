import { renderHook } from '@testing-library/react-hooks'
import { setupServer } from 'msw/node';
import { dummyProducts, productsRequestHandlers } from '../../../../data/productsRequestHandlers';
import { useProduct } from '../useProduct';

const server = setupServer(...productsRequestHandlers);

describe('Search Page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should not return product', () => {
    const { result: { current: { isProductFetching, product } } } = renderHook(() => useProduct(undefined));
    expect(isProductFetching).toBe(true);
    expect(product).toBeNull();
  });

  test('should return product by proper _id', async () => {
    const dummyProduct = dummyProducts[1];
    const { result, waitForNextUpdate } = renderHook(() => useProduct(dummyProduct._id));

    await waitForNextUpdate();

    expect(result.current.isProductFetching).toBe(false);
    expect(result.current.product).toStrictEqual(dummyProduct);
  });
});