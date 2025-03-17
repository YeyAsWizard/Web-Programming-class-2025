"use client"
import React, { useState } from 'react'
const STYLE = "border-2 border-black rounded-md px-2 mb-2"


export default function Calculator() {
    const [a , setA] = useState(0)
    const [b , setB] = useState(0)
    const [result , setResult] = useState(0)

  return (
    <div>
        <h1>Hello Calculator</h1>
        <div>
            <label htmlFor='A'>A: </label>
            <input type="number"
             value={a}
             onChange={e => setA(+e.target.value)}
             className={`${STYLE} bg-red-200`}
              />
            a = {a}
        </div>
        <div>
            <label htmlFor='B'>B: </label>
            <input type="number"
            value={b}
            onChange={e => setB(+e.target.value)}
            className={`${STYLE} bg-blue-200`} />
            b = {b}
        </div>
        <button className={`${STYLE}`}
        onClick={() => setResult(a+b)}>+</button>
        <div>
            Result: a + b = {result}
        </div>
    </div>
  )
}
