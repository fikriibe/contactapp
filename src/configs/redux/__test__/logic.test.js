import { createMockStore } from "redux-logic-test";
import reducer from "../reducer";
import logic from "../logic";
import { add_data, get_data } from "../actions";
import * as types from "../types";

const initialState = {
    data: [],
    temp: []
};

const store = createMockStore({
    initialState,
    reducer,
    logic
})

const payloadObj = { firstName: 'Fik', lastName: 'Fik', age: 10, photo: 'N/A' }
const payloadId = "abcd-efgh"
const resObj = (name) => {
    return { status: true, name }
}

const resTmp = (payload, type) => {
    return [
        { type },
        { type: types.SET_DATA, payload }
    ]
}

describe('logic test', () => {

    it('get data API', () => {
        store.dispatch(get_data())
        store.whenComplete(() => {
            expect(store.actions).toEqual(resTmp([], types.GET_DATA));
        })
        store.resetActions()
    })

    it('get detail data API', () => {
        store.dispatch(get_data(payloadId))
        store.whenComplete(() => {
            expect(store.actions).toEqual(
                resTmp(resObj("detail-contact"), types.GET_DATA)
            );
        })
        store.resetActions()
    })

    it('add data API', () => {
        store.dispatch(add_data(payloadObj))
        store.whenComplete(() => {
            expect(store.actions).toEqual(resTmp(resObj("add-contact"), types.ADD_DATA));
        })
        store.resetActions()
    })

    it('update data API', () => {
        store.dispatch(get_data(payloadId))
        store.whenComplete(() => {
            expect(store.actions).toEqual(resTmp(resObj("edit-contact"), types.UPD_DATA));
        })
        store.resetActions()
    })

    it('del data API', () => {
        store.dispatch(get_data("abcd-efgh"))
        store.whenComplete(() => { // runs this fn when all logic is complete
            console.log('actions', JSON.stringify(store.actions, null, 2));
            expect(store.actions).toEqual(resTmp(resObj('del-contact'), types.DEL_DATA));
        })
        store.resetActions()
    })

})



// store.subscribe(() => {
//     store.actions.forEach(x => console.log('action', x));
//     store.resetActions();
// });
