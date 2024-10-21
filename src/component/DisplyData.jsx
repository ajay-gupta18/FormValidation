import React, { useState } from 'react';
import './utils/DisplyData.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";

function DisplyData({ parentData, onEdit, onDelete, onSortAsc, onSortDesc }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = parentData.filter(item =>
    `${item.fname} ${item.lname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSort = (item) => {
    onSort(item)
  }
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
            onChange={handleSearch}
          />
        </span>
      </header>
      <table>
        <thead>
          <tr >
            <th >
              Full Name
              <span className='btn-span' onClick={() => { onSortAsc('fname') }}><FaSortAlphaDown /></span>
              <span className='btn-span' onClick={() => { onSortDesc('fname') }}><FaSortAlphaDownAlt /></span>
            </th>
            <th onClick={() => { onSort('email') }}>
              <span>Email</span>
              <span className='btn-span' onClick={() => { onSortAsc('email') }}><FaSortAlphaDown /></span>
              <span className='btn-span' onClick={() => { onSortDesc('email') }}><FaSortAlphaDownAlt /></span>
            </th>
            <th>
              City
            <span className='btn-span' onClick={() => { onSortAsc('city') }}><FaSortAlphaDown /></span>
            <span className='btn-span' onClick={() => { onSortDesc('city') }}><FaSortAlphaDownAlt /></span>
            </th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((item, index) => (
            <tr key={index}>
              <td >{`${item.fname} ${item.lname}`}</td>
              <td >{item.email}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td className='button-group'>
                <button className='icon' onClick={() => onEdit(index)}><FaRegEdit /></button>
                <button className='icon' onClick={() => onDelete(index)}><MdDeleteOutline /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplyData;
