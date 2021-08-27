import * as types from "./types";

export const set_data = (payload) => ({
    type: types.SET_DATA,
    payload
})

export const get_data = (payload) => ({
    type: types.GET_DATA,
    payload
})

export const add_data = payload => ({
    type: types.ADD_DATA,
    payload
})

export const edit_data = payload => ({
    type: types.UPD_DATA,
    payload
})

export const del_data = payload => ({
    type: types.DEL_DATA,
    payload
})

export const set_tmp = payload => ({
    type: types.SET_TEMP,
    payload
})

export const del_tmp = payload => ({
    type: types.DEL_TEMP,
    payload
})

