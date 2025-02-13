'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { ShippingAddress } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { shippingAddressSchema } from "@/lib/constants/validators";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast";
import { shippingAddressDefaultValues } from "@/lib/constants";
import { Input } from "@/components/ui/input";


const ShippingAddressForm = ({ address }: { address: ShippingAddress }) => {

    const router = useRouter();
    // const { toast } = useToast;

    const form = useForm<z.infer<typeof shippingAddressSchema>>({
        resolver: zodResolver(shippingAddressSchema),
        defaultValues: address || shippingAddressDefaultValues,
    })

    const onSubmit = (values: z.infer<typeof shippingAddressSchema>) => {

        console.log({ values });
        return;
    }


    return (<>
        <div className="max-w-md mx-auto space-y-4">
            <div className="h2-bold mt-4">Διευθυνση αποστολής</div>
            <p className="text-sm text-muted-foreground">
                Παρακαλώ προσθέστε μια διεύθυνση
            </p>

            <Form {...form}>
                <form method='post' className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            control={form.control}
                            name='street'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Οδός και αριθμός</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='city'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Πόλη</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='state'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Νομός</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='zipCode'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Ταχυδρομικός κώδικας (Τ.Κ)</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='country'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Χώρα</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button type='submit' className="bg-teal-900 hover:bg-teal-600">
                            Επόμενο
                        </Button>
                    </div>
                </form>
            </Form>
        </div>


    </>);
}

export default ShippingAddressForm;