import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, subCount } from '../../store/modules/counter/action'
import "./styles.css"


export default function Counter() {

    const count = useSelector(state => state.reducer)
    const dispatch = useDispatch();


    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch(addCount(1))}>+1</button>
            <button onClick={() => dispatch(subCount(1))}>-1</button>
        </div>
    )
}
