import { SubmittedOrder } from "@/lib/definitions";
import { fetchOrderById } from "@/lib/actions/order-actions";
import { notFound } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import { House } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { round2 } from "@/lib/utils";
import { CDN_END_URL } from '@/lib/constants/index'
import { ArrowLeft } from 'lucide-react';

export default async function SubmittedOrderPage({ params, }: { params: Promise<{ orderId: number }>; }) {

    const orderId = (await params).orderId;

    const order: SubmittedOrder = await fetchOrderById(orderId);
    if (!order) {
        notFound();
    } else {
        return (<>
            <div>
                <h1 className="py-4 h2-bold">Λεπτομέρειες Παραγγελίας | Κωδικός {order.id}</h1>
                {!order.items || order.items.length === 0 ? (
                    <div>Παραγγελία<br />
                        <div className="flex-center">
                            <Link href='/'><ArrowLeft className="inline" />Δεν υπάρχουν προϊόντα</Link> </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-4 md:gap-5">
                        <div className="overflow-x-auto md:col-span-3">
                            <Table>
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
                                    {order.items.map((item) =>
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
                                                <span className="px-2"> {item.quantity}</span>
                                            </TableCell>
                                            <TableCell className="text-right">{item.product.price}</TableCell>
                                            <TableCell className="text-right">{round2(item.quantity * item.product.price)}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            <div className="flex flex-row justify-end">
                                <div className="font-semibold">Αξία προϊόντων συμπερ. ΦΠΑ: <span className="text-teal-900 font-semibold text-xl">{order.items.length && round2(order.items.reduce((accumulator, c) => accumulator + c.quantity * c.product.price, 0))} €</span> </div>
                            </div>
                        </div>
                    </div>
                )
                }

            </div >
            <h1 className="py-4 h2-bold">Διεύθυνση αποστολής</h1>
            <div className="flex flex-row">
                <p className="font-semibold mr-2">Οδός και αριθμός: </p>
                <p>{order.street}</p>
            </div>
            <div className="flex flex-row">
                <p className="font-semibold mr-2">Πόλη: </p>
                <p>{order.city}</p>
            </div>
            <div className="flex flex-row">
                <p className="font-semibold mr-2">Νομός: </p>
                <p>{order.state}</p>
            </div>
            <div className="flex flex-row">
                <p className="font-semibold mr-2">T.K: </p>
                <p>{order.zipCode}</p>
            </div>
            <div className="flex flex-row">
                <p className="font-semibold mr-2">Χώρα: </p>
                <p>{order.country}</p>
            </div>

            <div className="flex flex-row justify-end mt-10">
                <Link href="/" className="font-bold justify-end text-teal-900 hover:text-teal-600"><House className="inline pr-2" /> <ArrowLeft className="inline pr-2" />Επιστροφή στην Κεντρική σελίδα</Link>
            </div>
        </>);
    }



}
