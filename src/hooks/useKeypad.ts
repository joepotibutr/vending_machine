import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setKeypadAction } from "../modules/keypad"
import { useCallback } from "react"



const useKeypad = () => {
    const dispatch = useDispatch()
    const keypad = useSelector((state: RootState) => state.keypad)

    const setKeypad = useCallback((coin: number) => {
        dispatch(setKeypadAction(coin))
    }, [])

    return {
        keypad,
        setKeypad
    }
}

export default useKeypad