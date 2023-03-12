import { useSearchParams, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { IProduct } from '../../types';
import { Styled } from './styled';
import { screenSizes } from '../../../../data/constants';

export const ProductItem = ({ _id, thumbnail, title, description, color, price, rating }: IProduct) => {
  const [searchParams] = useSearchParams();

  return (
    <Grid item xs={12} sm={6} md={4} alignItems="stretch">
      <Link
        to={_id}
        state={{ params: Object.fromEntries([...searchParams]) }}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <Styled.ProductItem>
          <Styled.Figure>
            <Styled.Picture>
              <source media={`(min-width:${screenSizes.mobileS}px)`} srcSet={thumbnail.small} />
              <source media={`(min-width:${screenSizes.mobileM}px)`} srcSet={thumbnail.medium} />
              <img src={thumbnail.medium} alt="" />
            </Styled.Picture>
            <Styled.Figcaption>
              <Styled.Title data-testid="product-title">{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.Figcaption>
          </Styled.Figure>
          <Styled.Info>
            <table>
              <tbody>
                <tr>
                  <td>Color:</td>
                  <td data-testid="product-color">{color}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td data-testid="product-price">{price}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td data-testid="product-rating">{rating}</td>
                </tr>
              </tbody>
            </table>
          </Styled.Info>
        </Styled.ProductItem>
      </Link>
    </Grid>
  );
};
