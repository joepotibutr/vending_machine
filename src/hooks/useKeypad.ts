import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { resetKeypad, setKeypadAction } from "../modules/keypad"
import { useCallback, useEffect } from "react"
import { openModalAction } from "../modules/modal"
import useProducts from "./useProducts"
import { useToast } from "@chakra-ui/react"



const useKeypad = () => {
    const toast = useToast();
    const dispatch = useDispatch()
    const { products } = useProducts()
    const keypad = useSelector((state: RootState) => state.keypad)

    const setKeypad = useCallback((key: number) => {
        dispatch(setKeypadAction(key))
    }, [])

    useEffect(() => {
        if (keypad.length === 2) {
            const product = products.find (product => product.productCode === keypad)
            if (product) {
                dispatch(openModalAction({
                    type: 'product',
                    data: { keypad, productCode: product.productCode },
                }))
            } else {
                toast({
                    title: "Product selection",
                    description: `Product code: ${keypad} not found.`,
                    duration: 10000,
                    status: 'error',
                    position: 'bottom-right',
                    isClosable: true
                  })
            }
           
            dispatch(resetKeypad())
            return
        }
    }, [keypad])

    return {
        keypad,
        setKeypad
    }
}

export default useKeypad