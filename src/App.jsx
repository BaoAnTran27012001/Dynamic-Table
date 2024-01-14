import { useState } from 'react';
import './App.css';
import { Header, Table } from './components';

function App() {
  const [columns, setColumns] = useState(['Column 1']);
  const [rows, setRows] = useState([]);
  const addColumn = () => {
    if (columns.length >= 9) {
      alert('Maximum 10 columns allowed');
      return;
    }
    setColumns([...columns, `Column ${columns.length + 1}`]);
    if (rows.length > 0) {
      setRows((prev) => prev.map((row) => [...row, '']));
    }
  };
  const addRow = () => {
    setRows((prev) => [...prev, columns.map((_) => '')]);
  };
  return (
    <div className='container-fluid'>
      <Header
        columns={columns}
        rows={rows}
        addColumn={addColumn}
        addRow={addRow}
      />
      <Table
        columns={columns}
        rows={rows}
        addColumn={addColumn}
        setColumns={setColumns}
        addRow={addRow}
        setRows= {setRows}
      />
    </div>
  );
}

export default App;
