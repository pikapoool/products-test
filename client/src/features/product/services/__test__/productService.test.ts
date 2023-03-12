import axios, { AxiosResponse } from 'axios';
import { dummyProducts } from '../../../../data/productsRequestHandlers';
import { productsService } from '../productsService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getAllProducts()', () => {
  it('should return products list', async () => {
    const mockedResponse = {
      data: dummyProducts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse as AxiosResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await productsService.getAllProducts();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(dummyProducts);
  });
});