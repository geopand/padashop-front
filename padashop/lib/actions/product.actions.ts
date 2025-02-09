'use server';
import { BACK_END_URL } from "../constants";

//Get ALL products
export async function getAllProducts() {
    const data = await fetch(`${BACK_END_URL}/api/products/all`)
    return data.json();
}
