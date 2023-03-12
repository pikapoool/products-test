import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, Link, useParams } from 'react-router-dom';
import { CenteredLoader } from '../../components/ui/CenteredLoader/CenteredLoader';
import { screenSizes } from '../../data/constants';
import { useProduct } from '../../features/product/hooks/useProduct';
import { PageContainer } from '../../layouts/PageContainer';
import { Styled } from './styled';

export const Details = () => {
  const { productId } = useParams();
  const { product, isProductFetching } = useProduct(productId);
  const { state } = useLocation();
  const searchParams = state?.params ? `?${new URLSearchParams(state.params).toString()}` : '';
  
  if (isProductFetching) {
    return (
      <PageContainer>
        <Grid item xs={12}>
          <CenteredLoader />
        </Grid>
      </PageContainer>
    );
  }

  return (
    <>
      <Styled.ButtonBack>
        <Button component={Link} to={`/search${searchParams}`} variant="contained" color="primary">
          <ArrowBackIcon />
        </Button>
      </Styled.ButtonBack>
      <PageContainer>
        <Grid item xs={12}>
          <Styled.ProductItem>
            <Styled.Figure>
              <Styled.Picture>
                <source media={`(min-width:${screenSizes.mobileS}px)`} srcSet={product?.thumbnail.small} />
                <source media={`(min-width:${screenSizes.mobileM}px)`} srcSet={product?.thumbnail.medium} />
                <source media={`(min-width:${screenSizes.laptop}px)`} srcSet={product?.thumbnail.large} />
                <img src={product?.thumbnail.medium} alt="" />
              </Styled.Picture>
              <Styled.Figcaption>
                <Styled.Title>{product?.title}</Styled.Title>
                <Styled.Description>{product?.description}</Styled.Description>
              </Styled.Figcaption>
            </Styled.Figure>
            <Styled.Info>
              <table>
                <tbody>
                  <tr>
                    <td>Color:</td>
                    <td>{product?.color}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>{product?.price}</td>
                  </tr>
                  <tr>
                    <td>Rating:</td>
                    <td>{product?.rating}</td>
                  </tr>
                </tbody>
              </table>
            </Styled.Info>
          </Styled.ProductItem>
        </Grid>
      </PageContainer>
    </>
  );
}
