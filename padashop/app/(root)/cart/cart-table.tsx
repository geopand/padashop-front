'use client';
import { Cart } from "@/lib/definitions";
import { useRouter } from 'next/navigation';
import { useTransition } from "react";
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

import sampleData from "@/utils/db/sample-data";



const CartTable = ({ carti }: { cart?: Cart }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const cart = sampleData.cart;


    return (
        <div>
            <h1 className="py-4 h2-bold">Το καλάθι μου</h1>
            {!cart || cart.items.length === 0 ? (
                <div>Το καλάθι είναι άδειο.<br />
                    <div className="flex-center">
                        <Link href='/'><ArrowLeft className="inline" /> Πίσω στην κεντρική σελίδα</Link> </div>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Εικόνα</TableHead>
                                    <TableHead>Όνομας Προϊόντος</TableHead>
                                    <TableHead>Ποσότητα</TableHead>
                                    <TableHead className="text-right">Τιμή μονάδας</TableHead>
                                    <TableHead className="text-right">Σύνολο</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cart.items.map((item) =>
                                    <TableRow>
                                        <TableCell className="font-medium">{item.image}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>

                    </div>
                </div>
            )
            }
        </div >);
}

export default CartTable;