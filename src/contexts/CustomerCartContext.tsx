import { createContext, Dispatch, SetStateAction, useState } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";

export interface CartItem {
    id: String
    name: String
    imageUrl: HTMLImageElement
    price: Number
    description: String
    defaultPriceId: String
}

interface CustomerCartContextType {
    customerCartItems: CartItem[]
    setCustomerCartItems: Dispatch<SetStateAction<CartItem[]>>
    totalCartValue: () => void
}

export const CustomerCartContext = createContext({} as CustomerCartContextType)

export function CustomerCartProvider({children}) {
    const [customerCartItems, setCustomerCartItems] = useState([]);

    function totalCartValue(){
        const initialValue = 0
        const total = customerCartItems.map(el => el.price).reduce((acc, cur)=> acc + cur, initialValue)
        return currencyFormatter(total)
    }

    return(
        <CustomerCartContext.Provider
            value={{
                customerCartItems,
                setCustomerCartItems,
                totalCartValue,
            }}
        >
            {children}
        </CustomerCartContext.Provider>
    )
}