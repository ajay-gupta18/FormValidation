import React, { useState } from 'react';
import './utils/DisplyData.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import Btngroup from './subComponents/Btngroup';

function DisplyData({ parentData, onEdit, onDelete, onSortAsc, onSortDesc }) {
  const [searchQuery, setSearchQuery] = useState('');
  //pagination state 
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = parentData.filter(item =>
    `${item.fname} ${item.lname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem,indexOfLastItem);

  const pageNumber= [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
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
              <Btngroup onSortAsc={onSortAsc} onSortDesc={onSortDesc} column='fname'/>
            </th>
            <th>
              <span>Email</span>
              <Btngroup onSortAsc={onSortAsc} onSortDesc={onSortDesc} column='email' />
            </th>
            <th>
              City
              <Btngroup onSortAsc={onSortAsc} onSortDesc={onSortDesc} column='city'/>
            </th>
            <th>Phone</th>
            <th>Gender
            <Btngroup onSortAsc={onSortAsc} onSortDesc={onSortDesc} column='gender'/>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((item, index) => (
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
      <div className="pagination">
        {pageNumber.map(number => (
          <span
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage === number ? 'active' : null}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DisplyData;
