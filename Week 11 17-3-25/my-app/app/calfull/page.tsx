"use client"
import React, { useState } from 'react'
const STYLE = "border-2 border-black rounded-md px-2 mb-2"


export default function Calculator() {
    const [a , setA] = useState(0)
    const [b , setB] = useState(0)
    const [result , setResult] = useState(0)
    const [number , setNumber] = useState(0)
    const [ops , setOps] = useState(1)
    const [state, setState] = useState(0)
    function cal(){
      if(state == 0){
        setResult(number)
      }else{
        if(ops == 1){
          setResult(a+b)
        }
        else if(ops == 2){
          setResult(a-b)
        }
        else if(ops == 3){
          setResult(a*b)
        }
        else if(ops == 4){
          setResult(a/b)
        }
      }
      setNumber(result)
      setA(0)
      setB(0)
      setState(0)
      setOps(1)
    }

    function conOps(op:number){
      setState(1)
      setOps(op)
    }

    function setNum(num:number){
      if(state == 0){
        setA(num)
      }else{
        setB(num)
      }
    }

    function clear(){
      setA(0)
      setB(0)
      setResult(0)
      setOps(0)
      setNumber(1)
      setState(0)
    }
  return (
    <div>
      <div className='bg-gray-500 h-[80px] mb-[1em] text-end leading-[80px] pr-5 text-5xl'>
        {result}
      </div>
      <div className='grid grid-rows-3 grid-cols-4'>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(1)}>1</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(2)}>2</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(3)}>3</button>
        <button className={`${STYLE}`} value={result} onClick={e => conOps(1)}>+</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(4)}>4</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(5)}>5</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(6)}>6</button>
        <button className={`${STYLE}`} value={result} onClick={e => conOps(2)}>-</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(7)}>7</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(8)}>8</button>
        <button className={`${STYLE}`} value={number} onClick={e => setNum(9)}>9</button>
        <button className={`${STYLE}`} value={result} onClick={e => conOps(3)}>x</button>
        <button  className={`${STYLE} col-span-3 text-center`} value={result} onClick={e => cal()}>=</button>
        <button  className={`${STYLE}`} value={result} onClick={e => conOps(4)}>/</button>
      </div>
        <button  className={`${STYLE}`} value={result} onClick={e => clear()}>AC</button>
      {a}
      {ops}
      {b}
      {state}
    </div>
  )
}
