import CartTable from "./cart-table";
import { getAllCartItems } from "@/lib/actions/cart-actions";

export const metadata = {
    title: "Το καλάθι μου"
};


const Cart = async () => {
    const items = await getAllCartItems(3);

    return (
        <div className="">
            <CartTable cart={items} />
        </div>);
}

export default Cart;