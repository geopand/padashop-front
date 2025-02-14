'use client';

import { createContext, useContext } from "react";
import { OrderDto } from "@/lib/definitions";
import { orderDtoDefaultValues } from '@/lib/constants'


const OrderDtoContext = createContext<OrderDto>(orderDtoDefaultValues);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <OrderDtoContext.Provider value={orderDtoDefaultValues}>
            {children}
        </OrderDtoContext.Provider>
    );
}

export const useOrder = () => useContext(OrderDtoContext);