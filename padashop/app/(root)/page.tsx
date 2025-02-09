import ProductList from '@/components/product-list';
import httpClient from '@/lib/httpclient';
import sampleData from '@/utils/db/sample-data';
import { BACK_END_URL } from '@/lib/constants'

const HomePage = async () => {
  console.log({ sampleData })
  const data = await fetch(`${BACK_END_URL}/api/products/all`)
  const products = await data.json()

  return (
    <ProductList data={products} title='Τα τελευταια προϊόντα' limit={4} />
  );
}

export default HomePage;