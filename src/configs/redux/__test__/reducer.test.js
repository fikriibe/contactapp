import reducer from "../reducer";
import * as types from "../types";
import { Reducer } from "redux-testkit";

const initialState = {
    data: [],
    temp: []
};

describe('store', () => {
    it('initial state', () => {
        expect(reducer()).toEqual(initialState)
    })

    it('set data', () => {
        const payload = [{ firstName: 'Testing', lastName: 'Ahmad', age: 20, photo: 'N/A' }]
        const action = { type: types.SET_DATA, payload }
        Reducer(reducer).expect(action).toReturnState({ ...initialState, data: payload })
    })

    it('set temp', () => {
        const payload = { status: true, name: 'add-contact', message: 'berhasil' }
        const action = { type: types.SET_TEMP, payload }
        Reducer(reducer).expect(action).toReturnState({ ...initialState, temp: [...initialState.temp, payload] })
    })

    it('remove temp', () => {
        const payload = "add-contact"
        const action = { type: types.DEL_TEMP, payload }
        Reducer(reducer).expect(action).toReturnState(initialState)
    })
})