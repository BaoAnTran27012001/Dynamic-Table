import React from 'react';
import { SavetoJSON, SavetoExcel } from '../index';
const Header = ({ columns, rows, addColumn, addRow }) => {
  return (
    <div className='row'>
      <div className='col-md-10 mt-5 mx-auto d-flex justify-content-between align-items-center'>
        <a href='/' className='ms-5 text-decoration-none text-dark fw-bold'>
          Create Dynamic Table
        </a>
        <div className='d-flex justify-content-end align-items-center gap-2'>
          <div className='d-flex align-items-center gap-2'>
            <p className='my-0'>Colums: {columns.length}</p>
            <p className='my-0'>Rows: {rows.length}</p>
          </div>
          <button
            type='button'
            className='btn btn-outline-dark'
            onClick={() => addColumn()}
          >
            Add Column
          </button>
          <button
            type='button'
            className='btn btn-outline-dark'
            onClick={() => addRow()}
          >
            Add Row
          </button>
          <SavetoJSON rows={rows} columns={columns} />
          <SavetoExcel rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Header;
