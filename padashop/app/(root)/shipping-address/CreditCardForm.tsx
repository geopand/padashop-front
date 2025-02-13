'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { useRouter } from "next/navigation";
import { creditCardSchema, shippingAddressSchema } from "@/lib/constants/validators";
import { CREDIT_CARD_TYPES } from '@/lib/constants/index';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { creditCardDefaultValues } from "@/lib/constants";
import { Input } from "@/components/ui/input";


const CreditCardForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof creditCardSchema>>({
        resolver: zodResolver(shippingAddressSchema),
        defaultValues: creditCardDefaultValues,
    })

    const onSubmit = (values: z.infer<typeof creditCardSchema>) => {
        console.log({ values });
        return;
    }

    return (<>
        <div className="max-w-md mx-auto space-y-4">
            <div className="h2-bold mt-4">Πληροφορίες κάρτας</div>
            <p className="text-sm text-muted-foreground">
                Παρακαλώ προσθέστε τα στοιχεία της κάρτας σας
            </p>

            <Form {...form}>
                <form method='post' className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <FormField
                            control={form.control}
                            name='cardType'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Τύπος κάρτας</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Επιλέξτε τύπο κάρτας" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {CREDIT_CARD_TYPES.map((type) =>
                                                <SelectItem key={type} value={type}>{type}</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='number'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Αριθμός Κάρτας</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='owner'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Όνομα κατόχου</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='expiryMonth'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Μήνας λήξης</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='expiryYear'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Έτος λήξης</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='cvc'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Κωδικός επαλήθευσης</FormLabel>
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

export default CreditCardForm;