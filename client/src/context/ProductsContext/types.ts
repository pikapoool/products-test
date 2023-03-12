import { IProduct } from '../../features/product/types';

export enum IProductActionKind {
  SET_PRODUCTS = 'SET_PRODUCTS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  SORT_BY_PRICE_HTL = 'SORT_BY_PRICE_HTL',
  SORT_BY_PRICE_LTH = 'SORT_BY_PRICE_LTH',
  SORT_BY_POPULAR = 'SORT_BY_POPULAR',
}

export interface IProductAction<T> {
  type: IProductActionKind;
  payload: T;
}

export interface IProductsInitialState {
  isProductsFetching: boolean;
  total: number;
  products: IProduct[];
}
export interface IProductsState extends IProductsInitialState {
  filterProducts: () => void;
  sortProductsByPriceHTL: () => void;
  sortProductsByPriceLTH: () => void;
  sortProductsByPopular: () => void;
}
