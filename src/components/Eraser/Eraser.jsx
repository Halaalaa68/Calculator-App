import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
export default function Eraser({erase}) {
  return (
    <button onClick={()=> erase()} className='text-6xl bg-transparent border-0 p-0 mt-1 text-red-600'><FontAwesomeIcon icon={faDeleteLeft} /></button>
  )
}
