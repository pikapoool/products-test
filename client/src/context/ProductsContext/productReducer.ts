import { IProductAction, IProductActionKind, IProductsInitialState } from './types';

const productReducer = (state: IProductsInitialState, action: IProductAction<IProductsInitialState>) => {
  const { type, payload } = action;

  switch (type) {
    case IProductActionKind.SET_PRODUCTS:
      return payload;
    case IProductActionKind.FILTER_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        total: payload.total
      };
    case IProductActionKind.SORT_BY_PRICE_HTL:
      return {
        ...state,
        products: payload.products
      };
    case IProductActionKind.SORT_BY_PRICE_LTH:
      return {
        ...state,
        products: payload.products
      };
    case IProductActionKind.SORT_BY_POPULAR:
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
};

export default productReducer;
