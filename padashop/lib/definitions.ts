
export type Address = {
    name    : string;
    number  : number;
    city    : string;
    state   : string;
    zipCode : string;
    country : string;
}

export type Product = {
    id: number,
    name: string;
    description: string;
    slug: string;
    category: Category;
    picture: string;
    price: number;
    status: string;
    brand: string;
    stock: number;
};

export type CartItemDto = {
    id: number;
    userId: number;
    product: Product;
    quantity: number;
}

export type CartItem = {
    productName: string;
    userId: number;
    productId: number;
    quantity: number;
}

export type Cart = {
    items: Array<CartItemDto>;
}

export type Category = {
    name: string;
    description: string;
    parent: number;
}

export type CreditCard = {
    owner: string;
    cardType: string;
    number: number;
    expiryMonth: number;
    expiryYear: number;
    cvc: number;
}

