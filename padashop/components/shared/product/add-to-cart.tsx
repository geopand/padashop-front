'use client';
import { Cart, CartItem } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast, useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addToCart } from "@/lib/actions/cart-actions";


const AddToCart = ({ item }: { item: CartItem }) => {
    const router = useRouter();

    const handleAddToCart = async () => {
        const res = await addToCart(item.userId, item.productId)
        if (res === false) {
            toast({
                variant: 'destructive',
                description: 'Δεν ήταν δυνατόν να προστεθεί στο καλάθι'
            });
            return;
        }

        // 

        toast({
            description: `${item.productName} προστέθηκε στο καλάθι`,
            action: (
                <ToastAction className="bg-primary text-white hover:bg-gray-800" altText="Πήγαινε στο καλάθι"
                    onClick={() => router.push('/cart')}>
                    Πήγαινε στο καλάθι
                </ToastAction>
            )
        })



    }
    return (
        <Button
            className="w-full bg-teal-900 hover:bg-teal-600"
            type='button'
            onClick={handleAddToCart}>
            <Plus /> Προσθήκη στο καλάθι
        </Button>
    );
}

export default AddToCart;

