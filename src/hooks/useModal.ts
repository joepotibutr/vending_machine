import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { openModalAction } from "../modules/modal"
import { useCallback } from "react"


const useModal = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const modalData = useSelector((state: RootState) => state.modal.data)

    const open = useCallback((data?: any) => {
        dispatch(openModalAction(data))
    }, [])

    return {
        isOpen,
        modalData,
        open
    }
}

export default useModal