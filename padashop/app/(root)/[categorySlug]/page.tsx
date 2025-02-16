import ProductList from '@/components/product-list';
import { getAllProductsByCategorySlug } from '@/lib/actions/product.actions';

export default async function CategoryPage({ params, }: { params: Promise<{ categorySlug: string }> }) {

    const { categorySlug } = await params;
    const products = await getAllProductsByCategorySlug(categorySlug);

    return (
        <ProductList data={products} title='Προϊόντα' />
    )

}