import { useCallback } from "react"
import { getProducts } from "../mock"
import useBalance from "./useBalance"
import { useToast } from "@chakra-ui/react";
import useModal from "./useModal";
import { removeProduct, setProducts } from "../modules/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const useProducts = () => {
    const toast = useToast();
    const { deductBalance, balance } = useBalance()
    const { open } = useModal()
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products)

    const initializeProducts = useCallback(() => {
        dispatch(setProducts(getProducts()))
    }, [])


    const checkOut = useCallback((id: string) => {
        const productTo = products.find(product => product.productCode === id)

        if (productTo.price > balance) {
            toast({
                title: "Checkout failure",
                description: `Not much balance remains. Please add ${productTo.price - balance} THB.`,
                duration: 10000,
                status: 'error',
                position: 'bottom-right',
                isClosable: true
              })
        } else {
            open()

            deductBalance(productTo.price)

            dispatch(removeProduct(id))

            toast({
                title: "Checkout success",
                description: `Grab your ${productTo.name} below`,
                duration: 10000,
                status: 'success',
                position: 'bottom-right',
                isClosable: true
              })
        }

    }, [products, balance])

    return {
        initializeProducts,
        products,
        checkOut
    }
}

export default useProducts