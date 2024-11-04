import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { addBalance, decreaseBalance, resetBalance,  } from "../modules/balance"
import { useCallback } from "react"
import { useToast } from "@chakra-ui/react";

const useBalance = () => {
    const dispatch = useDispatch()
    const toast = useToast();

 
    const balance = useSelector((state: RootState) => state.balance)


    const insertCoin = useCallback((coin: number) => {
        dispatch(addBalance(coin))
    }, [])


    const deductBalance = useCallback((amount: number) => {
        dispatch(decreaseBalance(amount))
    }, [])

    const refundBalance = useCallback(() => {
        toast({
            title: "Refund balance",
            description: `Your balance of ${balance} THB has been refunded successfully`,
            duration: 5000,
            status: 'success',
            position: 'bottom-right',
            isClosable: true
          })


        dispatch(resetBalance())
    }, [balance])

    return {
        balance,
        insertCoin,
        refundBalance,
        deductBalance
    }
}

export default useBalance