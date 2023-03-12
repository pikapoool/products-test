import axios from 'axios';
import { constants } from '../../../data/constants';
import { IProduct } from '../types';

export const productsService = {
  async getAllProducts(signal?: AbortSignal): Promise<IProduct[]> {
    const response = await axios.get(`${constants.DOMAIN}/products`, { signal });
    return response.data;
  },
  async getProductById(id: string, signal?: AbortSignal): Promise<IProduct> {
    const response = await axios.get(`${constants.DOMAIN}/product/${id}`, { signal });
    return response.data;
  },
};
