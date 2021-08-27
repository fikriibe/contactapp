import * as types from './types';

const initialState = {
    data: [],
    temp: []
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case types.SET_DATA:
            return { ...state, data: payload }
        case types.SET_TEMP:
            return { ...state, temp: [...state.temp, payload] }
        case types.DEL_TEMP:
            return { ...state, temp: state.temp.filter(({ name }) => name !== payload) }
        default:
            return state;
    }
};

export default reducer
