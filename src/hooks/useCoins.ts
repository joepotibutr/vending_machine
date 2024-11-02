import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { insertCoinAction } from "../modules/coins"
import { useCallback } from "react"



const useCoins = () => {
    const dispatch = useDispatch()
    const coins = useSelector((state: RootState) => state.coins)

    const insertCoin = useCallback((coin: number) => {
        dispatch(insertCoinAction(coin))
    }, [])

    return {
        coins,
        insertCoin
    }
}

export default useCoins