import { IProduct } from '../../types';

export const sortByPriceHTL = (product: IProduct[]) => product.sort((a, b) => b.price - a.price);
export const sortByPriceLTH = (product: IProduct[]) => product.sort((a, b) => a.price - b.price);
export const sortByPopular = (product: IProduct[]) => product.sort((a, b) => b.rating - a.rating);