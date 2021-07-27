import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return state + action.num

        case SUB_COUNT:
            return state - action.num

        default:
            return state;
    }
}

export default reducerCounter;