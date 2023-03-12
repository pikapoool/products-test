import { useProductsContext } from '../../../../context/ProductsContext/ProductsContext';
import { PriceRange } from '../PriceRange/PriceRange';
import { ColorFilter } from '../ColorFilter/ColorFilter';


export const Sidebar = () => {
  const { total } = useProductsContext();

  return (
    <section>
      <ColorFilter />
      <PriceRange />
      <p>
        Total products: <span data-testid={'total-products'}> {total}</span>
      </p>
    </section>
  );
};
