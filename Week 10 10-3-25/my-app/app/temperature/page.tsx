"use client"
import React, { useState } from 'react'
const STYLE = "border-2 border-black rounded-md px-2 mb-2"
const ANIMATION = "animate-[slideIn_0.3s_ease-out] transition-opacity duration-300"

export default function Todo() {
    const [tempF, setTempF] = useState(32)
    const [tempC, setTempC] = useState(0)
    const [convert, setConvert] = useState(`${32} F = ${0} C`)
    const [history, setHistory] = useState<String[]>([])

    function calTempC(temp:number){
      setTempF(temp)
      const celcius = ((temp-32)*(5/9))
      setTempC(parseFloat(celcius.toFixed(2)))
      setConvert(`${parseFloat(temp.toFixed(2))} F = ${parseFloat(celcius.toFixed(2))} C`)
    }

    function calTempF(temp:number){
      setTempC(temp)
      const faren = (((temp*9)/5)+32)
      setTempF(parseFloat(faren.toFixed(2)))
      setConvert(`${parseFloat(faren.toFixed(2))} F = ${parseFloat(temp.toFixed(2))} C`)
    }

    function addHist(){
      setHistory(hist=> [...hist, convert]);
    }

    function deleteHist(indexHist:number){
      setHistory(history.filter((_, index) => index !== indexHist))
    }

    function clearAll(){
      setHistory([])
    }

  return (
    <div className={`${STYLE} w-[400px] mx-auto`}>
      <h1 className='text-center text-blue-500 m-2'>Formular: (32°F - 32) x 5/9 = 0°C</h1>
      <div className='m-2'>
        <label htmlFor="tempF" className='w-[150px]'>Temperature (F): </label>
        <input className={`${STYLE} w-[120px]`} type="number" value={tempF} name='tempF' onChange={e => calTempC(Number(e.target.value))} />
      </div>
      <div className='m-2'>
        <label htmlFor="tempC" className='w-[150px]'>Temperature (C): </label>
        <input className={`${STYLE} w-[120px]`} type="number" value={tempC} name='tempC' onChange={e => calTempF(Number(e.target.value))} />
      </div>
      <button className={`${STYLE} px-3 py-1 ml-8 hover:bg-blue-200`} onClick={e => addHist()}>Convert</button>
      <button className={`${STYLE} px-3 py-1 ml-8 hover:bg-red-200`} onClick={e => clearAll()}>Clear</button>
      <div className='ml-3'>
        <h1 className='text-blue-500 font-bold my-3'>History:</h1>
        <div>
          {
            history.map((hist, index) => (
              <div key={index} className={`${ANIMATION} w-[100%]`}>
                        <div className={`inline-block w-[185px]`}>{index +1}. {hist} </div><button className={`${STYLE}`} onClick={() => deleteHist(+index)}>-</button>
              </div>
            ))
          }
        </div>
      </div>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-20px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes fadeout{
            opacity: 1;
          }to {
            opacity: 0;
          }
        `}
      </style>
    </div>
  )
}
