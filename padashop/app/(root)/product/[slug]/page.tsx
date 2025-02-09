import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Product } from "@/lib/definitions";
import Image from "next/image";
import { CDN_END_URL } from "@/lib/constants";
import AddToCart from "@/components/shared/product/add-to-cart";

const ProductDetailsPage = async (props: {
    params: Promise<{ slug: string }>

}) => {
    const { slug } = await props.params;
    const product: Product = await getProductBySlug(slug);
    if (!product) {
        notFound();
    }

    return (<>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5">
                {/* images column */}
                <div className="col-span-2">
                    <Image
                        src={`${CDN_END_URL}/${product.picture}`}
                        alt={product.name}
                        height={380}
                        width={380}
                    />
                </div>
                <div className="col-span-3">
                    <div className="flex flex-col gap-6">
                        <p>
                            {product.brand} {product.category.name}
                        </p>
                        <h1 className="h3-bold">{product.name}</h1>
                        <div className="mt-4">
                            <p className="font-semibold">Περιγραφή</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="flex-center w-56 mt-10">
                        <Card>
                            <CardContent className="p-4">
                                <div className="mb-2 flex justify-between">
                                    <div className="font-bold">Τιμή</div>
                                    <div className="font-bold text-teal-800">{product.price} €</div>
                                </div>
                                <div className="mb-2 flex justify-between">
                                    <div className="font-bold">Απόθεμα</div>
                                    {product.stock > 0 ? (
                                        <Badge variant='outline'>Διαθέσιμο</Badge>
                                    ) : (
                                        <Badge variant='destructive'>Μη-διαθέσιμο</Badge>
                                    )}
                                </div>
                                {product.stock > 0 && (
                                    <div className="pt-2">
                                        <AddToCart item={{
                                            userId: 3,
                                            productName: product.name,
                                            productId: product.id,
                                            quantity: 1
                                        }} />
                                    </div>)
                                }
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>




    </>);
}

export default ProductDetailsPage;