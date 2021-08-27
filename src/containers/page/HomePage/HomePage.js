import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalDeleteContact from '../../../components/ModalDeleteContact';
import RowContact from '../../../components/RowContact/RowContact';
import useCheckTemp from '../../../configs/hooks/useCheckTemp';
import { get_data, set_tmp } from '../../../configs/redux/actions';
import pathName from '../../../configs/router/pathName';
import DefaultContainer from '../../templates/DefaultContainer/DefaultContainer';

const HomePage = ({ history, location }) => {
    const nameProcess = 'del-contact'
    useCheckTemp({
        nameProcess, callback: () => {
            window.location.reload()
        }
    })
    const modalRef = useRef()
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    useEffect(() => {
        dispatch(get_data());
    }, [dispatch]);


    const handleClick = useCallback((id, key) => {
        const { push } = history

        switch (key) {
            case "detail":
                push(pathName.detail, { id })
                return
            case "edit":
                push(pathName.edit, { ...data.find((item) => id === item.id) })
                return
            default:
                modalRef.current.handleModal(id)
                return
        }
    }, [data, history])

    const handleDelete = useCallback((id) => {
        // dispatch(del_data(id))
        dispatch(set_tmp({ status: true, name: nameProcess }))
    }, [dispatch])

    const handleAddContact = useCallback(() => history.push(pathName.add), [history])
    return (
        <DefaultContainer title="CONTACT">
            {data.map((item) => (
                <RowContact item={item} key={item.id} onClick={handleClick} />
            ))}
            <ModalDeleteContact ref={modalRef} onDelete={handleDelete} />
            <Fab onClick={handleAddContact} style={{ position: 'absolute', bottom: 21, right: 13 }} color="primary" aria-label="add">
                <Add />
            </Fab>
        </DefaultContainer>
    );
};

export default HomePage;
