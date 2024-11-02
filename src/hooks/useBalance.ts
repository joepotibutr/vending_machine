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

    const returnTheChange = useCallback(() => {
        toast({
            title: "Return the change",
            description: `Your change ${balance} THB has return successfully`,
            duration: 10000,
            status: 'success',
            position: 'bottom-right'
          })


        dispatch(resetBalance())
    }, [balance])

    return {
        balance,
        insertCoin,
        returnTheChange,
        deductBalance
    }
}

export default useBalance