import { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductsContext/ProductsContext';

export const useFilterByColor = () => {
  const { filterProducts, isProductsFetching } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBy = searchParams.get('filterBy');

  const colorChange = (color: string) => {
    const params = Object.fromEntries([...searchParams]);
    const removeFromFilters = filterBy?.split('-').filter(el => el !== color).join('-');
    const updatedFilters = filterBy
      ? filterBy?.includes(color)
        ? removeFromFilters
        : `${filterBy}-${color}`
      : `${color}`;

    if (updatedFilters) {
      setSearchParams({
        ...params,
        filterBy: updatedFilters,
      });
    } else {
      const { filterBy: _, ...newParams } = params;
      setSearchParams(newParams);
    }
  };

  useEffect(() => {
    if (!isProductsFetching) {
      filterProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, isProductsFetching]);


  return {
    filterBy,
    colorChange,
  };
}