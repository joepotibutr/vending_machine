import { useCallback } from "react"
import { generateProductCode, randomProducts } from "../mock"
import { useToast } from "@chakra-ui/react";
import useModal from "./useModal";
import { removeProduct, setProducts } from "../modules/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const useProducts = () => {
    const toast = useToast();
    const { open } = useModal()
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products)

    const initializeProducts = useCallback(() => {
        dispatch(setProducts(randomProducts))
    }, [])

    const checkOutFailure = useCallback((remains: number) => {
        toast({
            title: "Checkout failure",
            description: `Not much balance remains. Please add ${remains} THB.`,
            duration: 5000,
            status: 'error',
            position: 'bottom-right',
            isClosable: true
            })
    }, [])

    const checkOutSuccess = useCallback((id: string, name: string) => {
            open()
            toast({
                title: "Checkout success",
                description: `Grab your ${name} below`,
                duration: 5000,
                status: 'success',
                position: 'bottom-right',
                isClosable: true
              })
            dispatch(removeProduct(id))


    }, [products])

    return {
        initializeProducts,
        products,
        checkOutSuccess,
        checkOutFailure
    }
}

export default useProducts