import React, { useState } from 'react';
import './utils/DisplyData.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function DisplyData({ parentData, onEdit, onDelete }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = parentData.filter(item =>
    `${item.fname} ${item.lname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='table-div'>
      <header className='header-group'>
        <h1>Data List</h1>
        <span>
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder='search' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </span>  
      </header>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Editer</th>
          </tr>
        </thead>
        <tbody>
          {filteredData!==""?filteredData.map((item, index) => (
            <tr key={index}>
              <td>{`${item.fname} ${item.lname}`}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td className='button-group'>
                <button className='icon' onClick={() => onEdit(index)}><FaRegEdit /></button>
                <button className='icon' onClick={() => onDelete(index)}><MdDeleteOutline /></button>
              </td>
            </tr>
          )):null}
        </tbody>
      </table>
    </div>
  );
}

export default DisplyData;
