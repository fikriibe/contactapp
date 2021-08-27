import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageProfile from '../../../components/ImageProfile'
import { del_tmp, get_data } from '../../../configs/redux/actions'
import { getFullName } from '../../../configs/utils/logicHelper'
import DefaultContainer from '../../templates/DefaultContainer/DefaultContainer'

const DetailPage = ({ history, location }) => {
    const dispatch = useDispatch()
    const nameProcess = "detail-contact"
    const data = useSelector(state => state.temp.find(({ name }) => name === nameProcess)?.data)

    useEffect(() => {
        const id = location.state?.id
        if (id) {
            dispatch(get_data(id))
        } else {
            history.goBack()
        }

    }, [dispatch, history, location.state])

    useEffect(() => dispatch(del_tmp(nameProcess)), [dispatch])
    const { photo, age } = data || {}
    const fullName = getFullName(data || {})
    return (
        <DefaultContainer title="DETAIL CONTACT">
            {data && <div className="d-flex align-items-center flex-column">
                <ImageProfile src={photo} alt={fullName} style={{ width: 200, height: 200 }} />
                <h4 className="mt-3">{fullName}</h4>
                <p>
                    Umur {age}
                </p>
            </div>}

        </DefaultContainer>
    )
}

export default DetailPage
