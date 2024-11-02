import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { openModalAction } from "../modules/modal"
import { useCallback } from "react"



const useModal = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.modal)

    const open = useCallback(() => {
        dispatch(openModalAction())
    }, [])

    return {
        isOpen,
        open
    }
}

export default useModal