import { ChangeEvent } from 'react';
import { usePriceRange } from '../../hooks/usePriceRange';
import { Styled } from './styled';

export const PriceRange = () => {
  const { minPrice, maxPrice, minPriceChange, maxPriceChange } = usePriceRange();

  const handleMinPriceChange = ({ target: { value: minPrice } }: ChangeEvent<HTMLInputElement>) => {
    minPriceChange(minPrice);
  };

  const handleMaxPriceChange = ({ target: { value: maxPrice } }: ChangeEvent<HTMLInputElement>) => {
    maxPriceChange(maxPrice);
  };

  // TODO: validation
  return (
    <fieldset>
      <legend>Price:</legend>
      <Styled.RangeInputs>
        <Styled.RangeInput
          placeholder="min"
          type="number"
          min="0"
          max={maxPrice || ''}
          value={minPrice || ''}
          onChange={handleMinPriceChange}
          data-testid={'filter-by-min-price'}
        />
        <span>-</span>
        <Styled.RangeInput
          placeholder="max"
          type="number"
          min={minPrice || ''}
          value={maxPrice || ''}
          onChange={handleMaxPriceChange}
          data-testid={'filter-by-max-price'}
        />
      </Styled.RangeInputs>
    </fieldset>
  );
}
