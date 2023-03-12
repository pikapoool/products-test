import Grid from '@mui/material/Grid';
import { PageContainer } from '../../layouts/PageContainer';
import { ProductsProvider } from '../../context/ProductsContext/ProductsContext';
import { ProductsList } from '../../features/product/ProductsList';
import { SortingButtons } from '../../features/product/components/SortingButtons/SortingButtons';
import { Sidebar } from '../../features/product/components/Sidebar/Sidebar';
import { SearchInputWrapper } from '../../features/product/components/SearchInputWrapper/SearchInputWrapper';

export const Search = () => {
  return (
    <ProductsProvider>
      <PageContainer>
        <>
          <Grid item xs={12}>
            <SearchInputWrapper />
          </Grid>
          <Grid item xs={12}>
            <SortingButtons />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <ProductsList />
          </Grid>
        </>
      </PageContainer>
    </ProductsProvider>
  );
}
