import React from 'react'
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";

const Btngroup = ({onSortAsc,onSortDesc,column}) => {
  return (
    <>
      <span className='btn-span' onClick={() => { onSortAsc(column) }}><FaSortAlphaDown /></span>
      <span className='btn-span' onClick={() => { onSortDesc(column) }}><FaSortAlphaDownAlt /></span>
    </>
  )
}

export default Btngroup
