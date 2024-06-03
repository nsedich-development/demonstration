"use client";

import React from 'react'
import {useReducer} from 'react';

import Menu from "./menu";

import TheReducer, {CountActionKind} from '@/components/actions'

export default function Header(props: any){
 
    const [state, dispatch] = useReducer(TheReducer, { count: 1 });

    const [count1, setCount] = React.useState<number>(0);
    const inc = () => {
      setCount(count1 + 1);
    };

    return <header>
            This is my header {props.name} {state.count} / {count1}
            <Menu {...props}/>
            <button onClick={inc}>useState</button>
            <button onMouseDown={() => {dispatch({ type: CountActionKind.INCREASE, payload: 5 }); console.log('hi') }}> -(reducer)</button>
            <button onMouseDown={() => {dispatch({ type: CountActionKind.DECREASE, payload: 5 }); console.log('hi') }}> +(reducer)</button>
            </header>

}