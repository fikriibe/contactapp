import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ImageProfile from '../../../components/ImageProfile'
import { add_data, del_tmp, edit_data } from '../../../configs/redux/actions'
import pathName from '../../../configs/router/pathName'
import { getFullName } from '../../../configs/utils/logicHelper'
import DefaultContainer from '../../templates/DefaultContainer/DefaultContainer'

const Input = ({ label, value = "", onChange, className, type }) => {
    const handleChange = useCallback(({ target }) => onChange(target.value), [onChange])
    return <div className={className}>
        <label className="d-block">
            {label}
        </label>
        <input required className='w-100' value={value} onChange={handleChange} type={type || "text"} />
    </div>
}

const AddPage = ({ history, location }) => {
    const dispatch = useDispatch()
    const isEditPage = location.pathname === pathName.edit
    const temp = useSelector(state => state.temp)
    const actionLogic = isEditPage ? edit_data : add_data
    const nameProcess = isEditPage ? "edit-contact" : "add-contact"
    const [state, setState] = useState({
        firstName: location.state?.firstName || "",
        lastName: location.state?.lastName || "",
        age: location.state?.age || 0,
        photo: location.state?.photo || "",
    })

    useEffect(() => {
        if (temp.length && temp.some(({ name }) => name === nameProcess)) {
            dispatch(del_tmp(nameProcess))
            history.goBack()
        }
    }, [dispatch, history, nameProcess, temp])

    const handleChange = useCallback((e, key) => {
        setState(prev => ({ ...prev, [key]: e }))
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const params = state
        if (isEditPage) params.id = location.state?.id ?? ""
        dispatch(actionLogic(params))
    }, [actionLogic, dispatch, isEditPage, location.state, state])

    const fullName = getFullName(state)
    return (
        <DefaultContainer title={`${isEditPage ? "EDIT" : 'TAMBAH'} CONTACT`}>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <ImageProfile className="mr-3" src={state["photo"]} alt={fullName} />
                    <Input className="flex" label="Source Profile" value={state['photo']} onChange={(e) => handleChange(e, 'photo')} />
                </div>
                <Input
                    className="mt-3"
                    label='Nama Depan'
                    value={state["firstName"]}
                    onChange={e => handleChange(e, "firstName")}
                />
                <Input
                    className="mt-3"
                    label='Nama Belakang'
                    value={state["lastName"]}
                    onChange={e => handleChange(e, "lastName")}
                />
                <Input
                    className="mt-3"
                    label='Umur'
                    type="number"
                    value={state["age"]}
                    onChange={e => handleChange(e, "age")}
                />
                <div className="content-center mt-5">
                    <Button type="submit" variant="contained">
                        submit
                    </Button>
                </div>
            </form>
        </DefaultContainer>
    )
}

export default AddPage
