import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductsContext } from '../../../context/ProductsContext/ProductsContext';

export const useSearchString = () => {
  const { filterProducts, isProductsFetching } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSearchChange = (search: string) => {
    const params = Object.fromEntries([...searchParams]);
    if (search !== '') {
      setSearchParams({
        ...params,
        search,
      });
    } else {
      const { search: _, ...newParams } = params;
      setSearchParams(newParams);
    }
  };

  useEffect(() => {
    if (!isProductsFetching) {
      filterProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, isProductsFetching]);


  return {
    search,
    handleSearchChange,
  };
}