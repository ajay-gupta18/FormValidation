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
  const handleDelete =(index) =>{
    setParentData(parentData.filter((v, i) => i !== index));
  }
  return (
    <>
     <div className="app-container">
     <ValidatedForm
        parentData={parentData}
        setParentData={setParentData}
        setShowTable={setShowTable}
        editIndex={editIndex}
        setEditIndex={setEditIndex} />

    <hr  className='hr-tag'/>

      {showTable && <DisplyData
        parentData={parentData}
        onEdit={handleEdit} onDelete={handleDelete} />}
     </div>
    </>
  );
}

export default App;
