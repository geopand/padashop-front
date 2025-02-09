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

export type Cart = {
    items: Array<string>;
}


export type Category = {
    name: string;
    description: string;
    parent: number;

}