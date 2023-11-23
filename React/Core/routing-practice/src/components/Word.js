import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const{word}=useParams
  return (
    <div><p>Word:{word}</p></div>
  )
}

export default Word