import { rest } from 'msw';
import { IProduct } from '../features/product/types';
import { constants } from './constants';

export const dummyProducts: IProduct[] = [
  {
    _id: 'id01',
    thumbnail: {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    title: 'title1',
    description: 'description',
    color: 'Red',
    price: 300,
    rating: 2.3,
  },
  {
    _id: 'id02',
    thumbnail: {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    title: 'title2',
    description: 'description',
    color: 'Black',
    price: 100,
    rating: 4.5,
  },
  {
    _id: 'id03',
    thumbnail: {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    title: 'title3',
    description: 'description',
    color: 'White',
    price: 200,
    rating: 4.3,
  },
  {
    _id: 'id04',
    thumbnail: {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    title: 'title4',
    description: 'description',
    color: 'Red',
    price: 150,
    rating: 3,
  },
];

export const productsRequestHandlers = [
  rest.get(`${constants.DOMAIN}/products`, (req, res, ctx) => {
    return res(ctx.json(dummyProducts));
  }),
  rest.get(`${constants.DOMAIN}/product/${dummyProducts[1]._id}`, (req, res, ctx) => {
    return res(ctx.json(dummyProducts[1]));
  }),
]