import { Product } from "@/lib/definitions";
import Image from 'next/image';
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { CDN_END_URL } from "@/lib/constants";

const ProductCard = ({ product }: { product: Product }) => {
    const productUrl = `/${product.category.slug}/${product.slug}`

    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`${productUrl}`}>
                    <Image
                        src={`${CDN_END_URL}/${product.picture}`}
                        alt={product.name}
                        height={300}
                        width={300}
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid grap-4">
                <div className="text-xs mb-2">{product.brand}</div>
                <Link href={`${productUrl}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex justify-end mr-8 mt-2">
                    {product.stock > 0 ? (
                        <p className="text-xl font-bold">€{product.price}</p>
                    ) : (
                        <p className="text-red-600">ΕΞΑΝΤΛΗΘΗΚΕ</p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    );
}

export default ProductCard;