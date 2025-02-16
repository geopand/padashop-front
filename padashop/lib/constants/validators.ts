import { z } from 'zod';


export const shippingAddressSchema = z.object({
    street: z.string().min(3, "Η διεύθυνση πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
    city: z.string().min(3, "Η πόλη πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
    state: z.string().min(3, "Ο νομός πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
    zipCode: z.string().min(3, "Ο Τ.Κ. πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
    country: z.string().min(3, "Η χώρα πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
})

export const creditCardSchema = z.object({
    owner: z.string().min(3, "Το ονοματεπώνυμο πρέπει να είναι τουλάχιστον 3 χαρακτήρες"),
    cardType: z.string(),
    number: z.string().min(16, "Το μήκος του αριθμού της κάρτας δεν είναι σωστό"),
    expiryMonth: z.coerce.number(),
    expiryYear: z.coerce.number(),
    cvc: z.coerce.number()
});

export const categorySchema = z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    parent: z.number()
});

export const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    category: categorySchema,
    picture: z.string(),
    price: z.number(),
    status: z.string(),
    brand: z.string(),
    stock: z.number()
});


export const cartItemDtoSchema = z.object({
    id: z.number(),
    userId: z.number(),
    product: productSchema,
    quantity: z.number()
});

export const cartItemSchema = z.object({
    productName: z.string(),
    userId: z.number(),
    productId: z.number(),
    quantity: z.number()
});

export const cartSchema = z.object({
    items: z.array(cartItemDtoSchema)
});



export const orderDtoSchema = z.object({
    userId: z.number(),
    creditCard: creditCardSchema,
    address: shippingAddressSchema
})


export const orderItemDtoSchema = z.object({
    id: z.number(),
    orderId: z.number(),
    product: productSchema,
    quantity: z.number(),
    price: z.number(),
    itemStatus: z.string(),
    shippingDate: z.number()
})

export const submittedOrderDtoSchema = z.object({
    id: z.number(),
    userId: z.number(),
    items: z.array(orderItemDtoSchema),
    ccName: z.string(),
    cardType: z.string(),
    ccNumber: z.string(),
    ccExpiryMoth: z.coerce.number(),
    ccExpiryYear: z.coerce.number(),
    ccCVC: z.coerce.number(),
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    country: z.string()
})




