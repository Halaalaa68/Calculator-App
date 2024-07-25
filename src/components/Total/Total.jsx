import React from 'react'
export default function Total({num}) {
  console.log(num)
  return (
    <div><h1 className='mt-2 text-teal-200'>{num? num: 0}</h1></div>
  )
}
