'use client';
import { Cart, CartItemDto, Product } from "@/lib/definitions";
import { useRouter } from 'next/navigation';
import { useState, useTransition } from "react";
import { ArrowRight, Loader, Minus, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CDN_END_URL } from '@/lib/constants/index'
import { addToCart, removeFromCart, getAllCartItems } from "@/lib/actions/cart-actions";

import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { round2 } from "@/lib/utils";



const CartTable = ({ cart }: { cart?: Array<CartItemDto> }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState(false);
    const handleAddToCart = async (item: CartItemDto) => {
        const res = await addToCart(item.userId, item.product.id)
        if (res === true) {
            item.quantity = item.quantity + 1
        } else {
            toast({
                description: `Δεν υπάρχει άλλο απόθεμα`,
                action: (
                    <ToastAction className="bg-primary text-white hover:bg-gray-800" altText="Πήγαινε στο καλάθι">
                        Εντάξει
                    </ToastAction>
                )
            })
        }
        setStatus(!status);
        return;
    }

    const handleRemoveFromCart = async (item: CartItemDto) => {
        const res = await removeFromCart(item.userId, item.product.id)
        if (res === true) {
            item.quantity = item.quantity - 1
        } else {
            const cart: Array<CartItemDto> = await getAllCartItems(3);
            const existInCart = cart.length > 0 && cart.find((x) => x.product.id === item.product.id);
            if (!existInCart) {
                toast({
                    description: `Δεν υπάρχει άλλο απόθεμα`,
                    action: (
                        <ToastAction className="bg-primary text-white hover:bg-gray-800" altText="Πήγαινε στο καλάθι">
                            Εντάξει
                        </ToastAction>
                    )
                })
                router.push('/cart')
            }
        }
        setStatus(!status);
        return;
    }


    return (
        <div>
            <h1 className="py-4 h2-bold">Το καλάθι μου</h1>
            {!cart || cart.length === 0 ? (
                <div>Το καλάθι είναι άδειο.<br />
                    <div className="flex-center">
                        <Link href='/'><ArrowLeft className="inline" /> Πίσω στην κεντρική σελίδα</Link> </div>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Εικόνα</TableHead>
                                    <TableHead>Όνομας Προϊόντος</TableHead>
                                    <TableHead className="text-center">Ποσότητα</TableHead>
                                    <TableHead className="text-right">Τιμή μονάδας</TableHead>
                                    <TableHead className="text-right">Σύνολο</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cart.map((item) =>
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            <Image
                                                src={`${CDN_END_URL}/${item.product.picture}`}
                                                alt={item.product.name}
                                                height={380}
                                                width={380}
                                            /></TableCell>
                                        <TableCell><Link href={`/product/${item.product.slug}`}>{item.product.name}</Link></TableCell>
                                        <TableCell className="flex-start">
                                            <Button type='button' variant='outline' onClick={() => handleRemoveFromCart(item)}>
                                                <Minus className="h-2 w-2" />
                                            </Button>
                                            <span className="px-2"> {item.quantity}</span>
                                            <Button type='button' variant='outline' onClick={() => handleAddToCart(item)}>
                                                <Plus className="h-2 w-2" />
                                            </Button>
                                        </TableCell>
                                        <TableCell className="text-right">{item.product.price}</TableCell>
                                        <TableCell className="text-right">{round2(item.quantity * item.product.price)}</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <div className="flex flex-row justify-end">
                            <div className="font-semibold">Αξία προϊόντων συμπερ. ΦΠΑ: <span className="text-teal-900 font-semibold text-xl">{cart.length && round2(cart.reduce((accumulator, c) => accumulator + c.quantity * c.product.price, 0))} €</span> </div>


                        </div>
                        <div className="flex flex-row justify-end mt-10">
                            <Button variant='default' className="justify-end bg-teal-900 hover:bg-teal-600">Επόμενο <ArrowRight /></Button>
                        </div>

                    </div>
                </div>
            )
            }

        </div >);
}

export default CartTable;