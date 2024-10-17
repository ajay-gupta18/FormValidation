import { useState } from 'react';
import './App.css';
import DisplyData from './component/DisplyData';
import ValidatedForm from './component/ValidatedForm';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [parentData, setParentData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit=(index)=>{
    setEditIndex(index);
  }
  return (
    <>
      <ValidatedForm
        parentData={parentData}
        setParentData={setParentData}
        setShowTable={setShowTable}
        editIndex={editIndex}
        setEditIndex={setEditIndex} />
      {showTable && <DisplyData
        parentData={parentData}
        onEdit={handleEdit} />}
    </>
  );
}

export default App;
