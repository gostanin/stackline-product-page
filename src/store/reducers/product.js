import * as actionTypes from "../actions/actionTypes";

const initialState = {
    id: "",
    image: "",
    title: "",
    subtitle: "",
    brand: "",
    retailed: "",
    reviews: [],
    details: [],
    tags: [],
    sales: [],
};

const loadData = (state, action) => {
    const newState = action.data[0]
    return newState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DATA:
            return loadData(state, action);
        default:
            return state;
    }
};

export default reducer;
