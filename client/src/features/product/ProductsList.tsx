import { CenteredLoader } from '../../components/ui/CenteredLoader/CenteredLoader';
import { ProductItem } from './components/ProductItem/ProductItem';
import Grid from '@mui/material/Grid';
import { useProductsContext } from '../../context/ProductsContext/ProductsContext';

export const ProductsList = () => {
  const { products, isProductsFetching } = useProductsContext();

  if (isProductsFetching) {
    return <CenteredLoader />;
  }

  return (
    <section>
      <Grid container spacing={2} alignItems="stretch">
        {products.map(product => (
          <ProductItem key={product._id} {...product} />
        ))}
      </Grid>
    </section>
  );
}
