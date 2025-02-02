import { Product } from "@/lib/definitions";
import ProductCard from "./product-card";

const ProductList = ({ data, title, limit }: { data: any; title?: string; limit?: number }) => {
    const limitedData = limit ? data.slice(0, limit) : data;

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {limitedData.length > 0 ? (
                <div className="grid grid-cols-a sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {limitedData.map((product: Product) =>
                        <ProductCard key={product.slug} product={product} />
                    )}
                </div>
            ) : (
                <div>
                    <p>Δεν βρέθηκαν προϊόντα</p>
                </div>
            )
            }
        </div>
    );
}

export default ProductList;