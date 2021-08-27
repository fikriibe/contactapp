import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { del_tmp } from "../redux/actions"

const useCheckTemp = ({ nameProcess, callback }) => {
    const temp = useSelector(state => state.temp)
    const dispatch = useDispatch()
    const dataTemp = useMemo(() => temp.find(({ name, status }) => name === nameProcess && status), [nameProcess, temp])
    const status = Boolean(dataTemp)
    useEffect(() => {
        if (status) {
            callback(dataTemp)
            dispatch(del_tmp(nameProcess))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataTemp, dispatch, nameProcess, status])

    return status
}

export default useCheckTemp