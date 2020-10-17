import data from "../../data/data.json";

import * as actionTypes from "./actionTypes";

export const initData = (data) => {
    return {
        type: actionTypes.LOAD_DATA,
        data: data,
    };
};

export const loadData = () => {
    return (dispatch) => {
        //emulating async API call
        dispatch(initData(data));
    };
};
