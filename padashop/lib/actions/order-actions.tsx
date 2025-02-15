import { OrderDto, OrderId } from "../definitions";
import { BACK_END_URL } from "../constants";


export async function createOrder(order: OrderDto) {
    const data = await fetch(`${BACK_END_URL}/api/order`,
        {
            method: 'POST',
            body: JSON.stringify({
                address: order.address,
                creditCard: order.creditCard,
                userId: order.userId
            }),
            headers: {
                'Content-Type': 'application/json',
            },

            redirect: 'follow'
        }
    )
    const status = data.status;
    if (status === 200) {
        const orderId: OrderId = await data.json()
        console.log("orderId is:", orderId)
        return orderId.id;
    } else {
        return -1;
    }
}

export async function fetchOrderById(id: number) {
    const data = await fetch(`${BACK_END_URL}/api/order/${id}`,
        {
            method: 'GET',
            redirect: 'follow'
        }
    )
    return data.json();
}