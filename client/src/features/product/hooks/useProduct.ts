import { useState, useEffect, useCallback } from 'react';
import { productsService } from '../services/productsService';
import { IProduct } from '../types';

export const useProduct = (productId: string | undefined) => {
  const [isProductFetching, setIsProductFetching] = useState(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  const fetchProduct = useCallback(
    () => {
      const controller = new AbortController();

      const fetchProduct = async () => {
        if (productId) {
          const response = await productsService.getProductById(productId, controller.signal);
          setProduct(response);
        }
      }

      fetchProduct()
        .catch(console.error)
        .finally(() => setIsProductFetching(false));

      return () => {
        controller.abort();
      }
    },
    [productId],
  );

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    isProductFetching,
    product,
  };
}