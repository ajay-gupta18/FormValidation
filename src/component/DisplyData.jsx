import React, { useState } from 'react';
import './utils/DisplyData.css';
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md";
function DisplyData({ parentData,onEdit,onDelete}) {


  return (
    <div className='table-div'>
      <header><h1>Data List</h1></header>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Editer</th>
          </tr>
        </thead>
        <tbody>
          {parentData.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              
              <td className='button-group'><button className='icon' onClick={()=>onEdit(index)}><FaRegEdit/></button>
              <button className='icon' onClick={()=>onDelete(index)}><MdDeleteOutline/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplyData;
