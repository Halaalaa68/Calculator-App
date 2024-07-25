import React from 'react'
import { useState } from 'react'
import Total from '../Total/Total'
export default function Num({clicked, arr,op ,myOp, result, any, calculate}) {

// console.log(numSum)
let arrOfNum=arr.map((i) => <button key={i} onClick={()=>clicked(i)} className='btn btn-blue w-1/4 m-1 shadow-2xl'>{i}</button>)
let arrOfOp=op.map((c,index) => <button key={index+9} onClick={()=>calculate(c)} className='btn bg-teal-200 w-1/8 m-1'>{(c=='*'? 'x' : c=='**' ? '^' : c)}</button>)
  return (
    <>
    <Total num={myOp=='='? `Result ${result}`: any} />
    <div className='numbers border border-spacing p-5 border-emerald-700 '>
      <div className='flex justify-center align-middle flex-wrap'>
      {arrOfNum}
      </div>
    </div>
    <div className='op mt-5 border border-spacing p-5'>
      <div className='m-auto'>
        {arrOfOp}
      </div>
    </div>
    </>
  )
}
