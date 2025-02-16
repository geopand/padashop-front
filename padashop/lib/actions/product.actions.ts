'use server';
import { BACK_END_URL } from "../constants";

export async function getAllProducts() {
    const data = await fetch(`${BACK_END_URL}/api/products/all`)
    return data.json();
}

export async function getAllProductsByCategorySlug(cSlug: string) {
    const data = await fetch(`${BACK_END_URL}/api/products/categories/slug?slug=${cSlug}`)
    return data.json();
}


export async function getProductBySlug(slug: string) {
    const data = await fetch(`${BACK_END_URL}/api/products/slug?slug=${slug}`)
    return data.json();
}
