import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductsContext/ProductsContext';

export const usePriceRange = () => {
  const { filterProducts, isProductsFetching } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const minPriceChange = (minPrice: string) => {
    const params = Object.fromEntries([...searchParams]);
    if (minPrice !== '') {
      setSearchParams({
        ...params,
        minPrice,
      });
    } else {
      const { minPrice: _, ...newParams } = params;
      setSearchParams(newParams);
    }
  };

  const maxPriceChange = (maxPrice: string) => {
    const params = Object.fromEntries([...searchParams]);
    if (maxPrice !== '') {
      setSearchParams({
        ...params,
        maxPrice,
      });
    } else {
      const { maxPrice: _, ...newParams } = params;
      setSearchParams(newParams);
    }
  };

  useEffect(() => {
    if (!isProductsFetching) {
      filterProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice, isProductsFetching]);


  return {
    minPrice,
    maxPrice,
    minPriceChange,
    maxPriceChange,
  };
}