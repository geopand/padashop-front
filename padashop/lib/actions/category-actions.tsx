'use server';
import { BACK_END_URL } from "../constants";


export async function getAllCategories() {
    const data = await fetch(`${BACK_END_URL}/api/categories`)
    return data.json();
}



