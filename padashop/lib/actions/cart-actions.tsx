'use server';
import { ArrowUpWideNarrow } from "lucide-react";
import { BACK_END_URL } from "../constants";
import { log } from "console";
import { round2 } from "../utils";
import { CartItem } from "../definitions";

export async function addToCart(userId: number, productId: number) {
    log(`${BACK_END_URL}/api/cart/add?userId=${userId}&productId=${productId}`)
    const data = await fetch(`${BACK_END_URL}/api/cart/add?userId=${userId}&productId=${productId}`,
        {
            method: 'PUT',
            redirect: 'follow'
        }
    )
    const status = data.status;
    if (status === 200) {
        return true
    } else {
        return false;
    }
}


export async function removeFromCart(userId: number, productId: number) {
    const data = await fetch(`${BACK_END_URL}/api/cart/remove?userId=${userId}&productId=${productId}`,
        {
            method: 'PUT',
            redirect: 'follow'
        }
    )
    const status = data.status;
    if (status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function deleteFromCart(userId: number, productId: number) {
    const data = await fetch(`${BACK_END_URL}/api/cart/item?userId=${userId}&productId=${productId}`,
        {
            method: 'DELETE',
            redirect: 'follow'
        }
    )
    const status = data.status;
    if (status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function getAllCartItems(userId: number) {
    const data = await fetch(`${BACK_END_URL}/api/cart/items/${userId}`)
    return data.json();
}




// const calculatePrice = (items: CartItem[]) => {
//     const itemsPrice = round2(
//         items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
//     )
// }