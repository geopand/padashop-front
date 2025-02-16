
import { z } from 'zod';
import {
    breadcrumbSchema,
    cartItemDtoSchema,
    cartItemSchema,
    cartSchema,
    categorySchema,
    creditCardSchema,
    orderDtoSchema,
    productSchema,
    submittedOrderDtoSchema,
    shippingAddressSchema} from '@/lib/constants/validators';


export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export type Category = z.infer<typeof categorySchema>;

export type Product = z.infer<typeof productSchema>;

export type CartItemDto = z.infer<typeof cartItemDtoSchema>;

export type CartItem = z.infer<typeof cartItemSchema>;

export type Cart = z.infer<typeof cartSchema>;

export type CreditCard = z.infer<typeof creditCardSchema>;

export type OrderDto = z.infer<typeof orderDtoSchema>;

export type OrderId = {
    id: number;
}

export type SubmittedOrder = z.infer<typeof submittedOrderDtoSchema>;

export type BreadCrumb = z.infer<typeof breadcrumbSchema>; 