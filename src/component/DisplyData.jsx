import React, { useState } from 'react';
import './utils/DisplyData.css';

function DisplyData({ parentData,onEdit}) {

  return (
    <div className='table-div'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {parentData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td><button onClick={()=>onEdit(index)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplyData;
