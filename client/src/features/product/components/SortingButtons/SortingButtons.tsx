import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useEffect, useMemo } from 'react';
import { useProductsContext } from '../../../../context/ProductsContext/ProductsContext';
import { Styled } from './styled';

export enum SortingTypes {
  LTH = 'lth',
  HTL = 'htl',
  POPULAR = 'popular',
};

const btns = [
  {
    type: SortingTypes.LTH,
    label: 'Price Low to High',
    testId: 'btn-sort-lth',
  },
  {
    type: SortingTypes.HTL,
    label: 'Price High to Low',
    testId: 'btn-sort-htl',
  },
  {
    type: SortingTypes.POPULAR,
    label: 'Popular first',
    testId: 'btn-sort-popular',
  },
];

export const SortingButtons = () => {
  const { sortProductsByPriceHTL, sortProductsByPriceLTH, sortProductsByPopular, total } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortingType = searchParams.get('sortingType');

  const getVariant = (type: SortingTypes) => (sortingType === type ? 'contained' : 'outlined');

  const onClickHandler = (sortingType: SortingTypes) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, sortingType });
  };

  const sortingMethods: any = useMemo(
    () => ({
      [SortingTypes.HTL]: sortProductsByPriceHTL,
      [SortingTypes.LTH]: sortProductsByPriceLTH,
      [SortingTypes.POPULAR]: sortProductsByPopular,
    }),
    [sortProductsByPriceHTL, sortProductsByPriceLTH, sortProductsByPopular],
  );

  useEffect(() => {
    if (sortingType && total !== 0) {
      sortingMethods[sortingType]();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingType, total]);

  return (
    <Stack spacing={2} direction="row">
      {btns.map(({ type, label, testId }, i) => (
        <Styled.Button key={i} variant={getVariant(type)} onClick={() => onClickHandler(type)} data-testid={testId}>
          {label}
        </Styled.Button>
      ))}
    </Stack>
  );
}
