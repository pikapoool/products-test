import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsService } from '../../features/product/services/productsService';
import { IProduct } from '../../features/product/types';
import { sortByPriceHTL, sortByPriceLTH, sortByPopular } from '../../features/product/utils/helpers/sorting';
import productReducer from './productReducer';
import { IProductActionKind, IProductsState, IProductsInitialState } from './types';

const initialState: IProductsInitialState = {
  isProductsFetching: true,
  products: [],
  total: 0,
};

export const ProductsContext = createContext<IProductsState>(initialState as IProductsState);

interface IProps {
  children?: JSX.Element;
}

export const ProductsProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [initialProducts, setInitialProducts] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const filterBy = searchParams.get('filterBy');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const setProducts = (signal: AbortSignal) => {
    productsService
      .getAllProducts(signal)
      .then(products => {
        setInitialProducts(products);
        dispatch({
          type: IProductActionKind.SET_PRODUCTS,
          payload: {
            isProductsFetching: false,
            products,
            total: products.length,
          },
        });
      })
      .catch(console.error);
  };

  useEffect(() => {
    const controller = new AbortController();
    setProducts(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const filterProducts = () => {
    const updatedProduct = initialProducts
      .filter(({ title }) => search ? title.includes(search) : true)
      .filter(({ color }) => filterBy ? filterBy.includes(color) : true)
      .filter(({ price }) => minPrice ? price >= +minPrice : true)
      .filter(({ price }) => maxPrice ? price <= +maxPrice : true);

    dispatch({
      type: IProductActionKind.FILTER_PRODUCTS,
      payload: {
        ...state,
        products: updatedProduct,
        total: updatedProduct.length,
      },
    });
  };

  const sortProductsByPriceHTL = () => {
    const updatedProduct = sortByPriceHTL(state.products);
    dispatch({
      type: IProductActionKind.SORT_BY_PRICE_HTL,
      payload: {
        ...state,
        products: updatedProduct,
      },
    });
  };

  const sortProductsByPriceLTH = () => {
    const updatedProduct = sortByPriceLTH(state.products);
    dispatch({
      type: IProductActionKind.SORT_BY_PRICE_LTH,
      payload: {
        ...state,
        products: updatedProduct,
      },
    });
  };

  const sortProductsByPopular = () => {
    const updatedProduct = sortByPopular(state.products);
    dispatch({
      type: IProductActionKind.SORT_BY_POPULAR,
      payload: {
        ...state,
        products: updatedProduct,
      },
    });
  };

  const value: IProductsState = {
    ...state,
    sortProductsByPriceHTL,
    sortProductsByPriceLTH,
    sortProductsByPopular,
    filterProducts,
  };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error('useProductsContext must be used within ProductsContext');
  }

  return context;
};
