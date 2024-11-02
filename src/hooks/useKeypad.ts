import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { resetKeypad, setKeypadAction } from "../modules/keypad"
import { useCallback, useEffect } from "react"
import { openModalAction } from "../modules/modal"



const useKeypad = () => {
    const dispatch = useDispatch()
    const keypad = useSelector((state: RootState) => state.keypad)

    const setKeypad = useCallback((key: number) => {
        dispatch(setKeypadAction(key))
    }, [])

    useEffect(() => {
        if (keypad.length === 2) {
            dispatch(openModalAction({
                data: keypad
            }))
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