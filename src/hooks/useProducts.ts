import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { resetKeypad, setKeypadAction } from "../modules/keypad"
import { useCallback } from "react"
import { openModalAction } from "../modules/modal"

const useProducts = () => {
    const dispatch = useDispatch()
    const keypad = useSelector((state: RootState) => state.keypad)

    const setKeypad = useCallback((key: string) => {
        if (keypad.length === 2) {
            dispatch(openModalAction({
                data: keypad
            }))
            dispatch(resetKeypad())
            return
        }
        dispatch(setKeypadAction(key))
    }, [keypad])

    return {
        keypad,
        setKeypad
    }
}

export default useProducts