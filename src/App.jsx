import { useState } from 'react';
import './App.css';
import DisplyData from './component/DisplyData';
import ValidatedForm from './component/ValidatedForm';

function App() {
  const [showTable, setShowTable] = useState(true);
  const [parentData, setParentData] = useState([
    {
      fname: "Peter",
      lname: "Parker", // Spider-Man
      email: "peter.parker@marvel.com",
      phone: "+1-555-0123",
      city: "New York",
      gender: "Male"
  },
  {
      fname: "Wanda",
      lname: "Maximoff", // Scarlet Witch
      email: "wanda.maximoff@marvel.com",
      phone: "+1-555-4567",
      city: "WandaVision",
      gender: "Female"
  },
  {
      fname: "Raj",
      lname: "Chaudhary", // Indian hacker
      email: "raj.chaudhary@example.com",
      phone: "+91-9999999999",
      city: "Delhi",
      gender: "Male"
  },
  {
      fname: "Sreeram",
      lname: "Nair", // Indian software developer
      email: "sreeram.nair@example.com",
      phone: "+91-8888888888",
      city: "Bengaluru",
      gender: "Male"
  },
  {
      fname: "Aisha",
      lname: "Khan", // Random name
      email: "aisha.khan@example.com",
      phone: "+91-7777777777",
      city: "Mumbai",
      gender: "Female"
  }
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');


  const handleEdit = (index) => {
    setEditIndex(index);
  }
  const handleDelete = (index) => {
    setParentData(parentData.filter((v, i) => i !== index));
  }
  const handleSortAscending = (column) => {
    const sortedData = [...parentData].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });

    setSortColumn(column);
    setSortOrder('asc');
    setParentData(sortedData);
  };

  const handleSortDescending = (column) => {
    const sortedData = [...parentData].sort((a, b) => {
      if (a[column] < b[column]) return 1;
      if (a[column] > b[column]) return -1;
      return 0;
    });

    setSortColumn(column);
    setSortOrder('desc');
    setParentData(sortedData);
  };


  return (
    <>
      <div className="app-container">
       
        <ValidatedForm
          parentData={parentData}
          setParentData={setParentData}
          editIndex={editIndex}
          setEditIndex={setEditIndex} />
  

        <div className='hr-tag'><hr  /></div>

        <DisplyData
          parentData={parentData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSortAsc={handleSortAscending}
          onSortDesc = {handleSortDescending}
          
        />
      </div>
    </>
  );
}

export default App;
