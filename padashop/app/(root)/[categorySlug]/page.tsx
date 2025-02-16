import ProductList from '@/components/product-list';
import { getAllProductsByCategorySlug } from '@/lib/actions/product.actions';
import BreadCrump from '@/components/breadcrump';
import { BreadCrumb, Product } from '@/lib/definitions'


export default async function CategoryPage({ params, }: { params: Promise<{ categorySlug: string }> }) {

    const { categorySlug } = await params;
    const products: Array<Product> = await getAllProductsByCategorySlug(categorySlug);

    const breadcrumb: BreadCrumb = {
        items: [{
            title: `${products[0]?.category.name ?? categorySlug}`,
            url: `/${categorySlug}`,
            isCurrent: true
        }
        ]
    }

    return (
        <>
            <BreadCrump breadcrumb={breadcrumb} />
            <ProductList data={products} title='Προϊόντα' />
        </>
    )

}