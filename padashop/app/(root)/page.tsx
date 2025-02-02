import ProductList from '@/components/product-list';
import sampleData from '@/utils/db/sample-data';

const HomePage = () => {
    console.log({sampleData})

  return ( 
    <ProductList data={sampleData.products} title='Τα τελευταια προϊόντα' limit={4} />
   );
}
 
export default HomePage;