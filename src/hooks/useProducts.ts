import { useCallback, useMemo, useState } from "react"
import { getProducts } from "../mock"
import useBalance from "./useBalance"

const useProducts = () => {
    const { deductBalance } = useBalance()
    const [products, setProducts] = useState(getProducts())

    const checkOut = useCallback((id: keyof typeof products) => {
        // setProducts(currentProducts => {
        //     currentProducts[id].quantity - 1
        //     return currentProducts
        // })
        // deductBalance(products[id].price)
    }, [products])

    return {
        products,
        checkOut
    }
}

export default useProducts