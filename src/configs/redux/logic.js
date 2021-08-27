import { createLogic } from "redux-logic";
import * as types from "./types";
import base_url from "../api/url";
import axios from "axios";
import { set_data, set_tmp } from "./actions";
import { getUrlId } from "../utils/logicHelper";

const handleError = err => alert(err.message)

const getData = createLogic({
    type: types.GET_DATA,
    process({ action }, dispatch, done) {
        const url = getUrlId(base_url, action.payload)
        axios({ method: "get", url })
            .then(({ data }) => {
                if (action.payload) {
                    dispatch(set_tmp({ name: 'detail-contact', data: data.data }))
                } else {
                    dispatch(set_data(data.data))
                }
            })
            .catch(handleError)
            .finally(done)
    }
})

const updateData = createLogic({
    type: types.UPD_DATA,
    process({ action }, dispatch, done) {
        const { id, ...data } = action.payload
        const url = getUrlId(base_url, id)
        axios({ method: "put", url, data })
            .then(({ data: { message } }) => {
                dispatch(set_tmp({ status: true, name: 'edit-contact', message }))
            })
            .catch(handleError)
            .finally(done)
    }
})

const deleteData = createLogic({
    type: types.DEL_DATA,
    process({ action }, dispatch, done) {
        const url = getUrlId(base_url, action.payload)
        axios({ method: "delete", url })
            .then(res => {
                dispatch(set_tmp({ status: true, name: "del-contact" }))
            })
            .catch(handleError)
            .finally(done)
    }
})

const addData = createLogic({
    type: types.ADD_DATA,
    process({ action }, dispatch, done) {
        const data = action.payload
        axios({ method: "post", url: base_url, data })
            .then(({ data: { message } }) => {
                dispatch(set_tmp({ status: true, name: 'add-contact', message }))
            })
            .catch(handleError)
            .finally(done)
    }
})

export default [getData, updateData, deleteData, addData]