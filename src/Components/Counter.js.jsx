import React from 'react';
import {useState, useEffect} from "react";

export default function Counter () {
    const [state, setState] = useState(0)

    useEffect(() => {
        console.log('click')
    }, [state])

    function counterMinus () {
        setState(prevState => prevState - 1)
    }
    function counterPlus () {
        setState(prevState => prevState + 1)
    }
    return (
        <>
            <button onClick={counterMinus}>-</button>
            <span>{state}</span>
            <button onClick={counterPlus}>+</button>
            <MyComponent onClick = {() => console.log('HELLO') } />
        </>
    )
}

function MyComponent({onClick}) {
    return (
        <button onClick = {onClick} >CLICK ME</button>
    )
}