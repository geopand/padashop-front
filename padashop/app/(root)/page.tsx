import ProductList from '@/components/product-list';
import httpClient from '@/lib/httpclient';
import { getAllProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const products = await getAllProducts()

  return (
    <ProductList data={products} title='Τα τελευταια προϊόντα' limit={14} />
  );
}

export default HomePage;