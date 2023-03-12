import { IProduct } from '../../../types';
import { sortByPopular, sortByPriceHTL, sortByPriceLTH } from '../sorting';

describe('sorting', () => {
  const dataPrice = [
    { price: 1 },
    { price: 100 },
    { price: 10 },
  ];

  describe('sortByPriceHTL helper', () => {
    it('should sort array by price property high to low', () => {
      const expectedResult = [
        { price: 100 },
        { price: 10 },
        { price: 1 },
      ];

      expect(sortByPriceHTL(dataPrice as IProduct[])).toEqual(expectedResult);
    });
  });

  describe('sortByPriceLTH helper', () => {
    it('should sort array by price property low to high', () => {
      const expectedResult = [
        { price: 1 },
        { price: 10 },
        { price: 100 },
      ];

      expect(sortByPriceLTH(dataPrice as IProduct[])).toEqual(expectedResult);
    });
  });

  describe('sortByPopular helper', () => {
    it('should sort array by rating property high to low', () => {
      const data = [
        { rating: 1 },
        { rating: 100 },
        { rating: 10 },
      ];

      const expectedResult = [
        { rating: 100 },
        { rating: 10 },
        { rating: 1 },
      ];

      expect(sortByPopular(data as IProduct[])).toEqual(expectedResult);
    });
  });

});
