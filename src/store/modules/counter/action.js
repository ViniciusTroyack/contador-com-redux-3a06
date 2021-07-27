import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (num) => {
    return {
        type: ADD_COUNT,
        num,
    };
};

export const subCount = (num) => {
    return {
        type: SUB_COUNT,
        num,
    };
};