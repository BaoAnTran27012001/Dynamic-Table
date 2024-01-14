import React, { useState } from 'react';

const Table = ({ columns, rows, addColumn, setColumns, addRow, setRows }) => {
  const handleChangeColumn = (value, id) => {
    setColumns((prev) =>
      prev.map((col, index) => (index === id ? value : col))
    );
  };
  const handleDeleteColumn = (id) => {
    if (columns.length > 1) {
      setColumns((prev) => prev.filter((col, index) => index !== id));
    } else {
      alert('Sorry.This is a default column.You cannot delete this');
    }
  };
  const handlChangeRow = (value, index, columnIndex) => {
    setRows((prevRows) =>
      prevRows.map((row, id) =>
        index === id
          ? row.map((col, colId) => (columnIndex === colId ? value : col))
          : row
      )
    );
  };
  const handleDeleteRow = (id) => {
    setRows((prevRows) => prevRows.filter((row, index) => index !== id));
  };
  return (
    <div className='row'>
      <div className='col-md-10 mx-auto mt-5'>
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th></th>
              {columns.map((col, index) => {
                return (
                  <th key={index} className='bg-white text-dark text-center '>
                    <button
                      type='button'
                      className='btn btn-block btn-outline-danger btn-sm btn-blcok'
                      onClick={() => handleDeleteColumn(index)}
                    >
                      Delete
                    </button>
                  </th>
                );
              })}
              <th></th>
            </tr>
            <tr>
              <th className='bg-dark text-white text-center'>Sno.</th>
              {columns.map((col, index) => {
                return (
                  <th key={index} className='bg-dark text-white text-center '>
                    <input
                      onChange={(e) =>
                        handleChangeColumn(e.target.value, index)
                      }
                      type='text'
                      className='form-control text-white text-center bg-transparent'
                      value={col}
                      style={{
                        boxShadow: 'none',
                        outline: 'none',
                        border: 'none',
                      }}
                    />
                  </th>
                );
              })}
              <th className='bg-dark text-white text-center'>
                <button
                  className='btn btn-outline-light btn-sm'
                  type='button'
                  onClick={() => addColumn()}
                >
                  Add Column
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length < 1 && (
              <tr>
                <th
                  colSpan={columns.length + 2}
                  scope='row'
                  className='text-center'
                >
                  Please click on add row button to add row
                </th>
              </tr>
            )}
            {rows.length > 0 &&
              rows.map((row, index) => {
                return (
                  <tr key={index}>
                    <td className='text-center'>{index + 1}</td>
                    {columns.map((col, colIndex) => {
                      return (
                        <td key={colIndex / 10}>
                          <input
                            type='text'
                            placeholder='Enter a value'
                            className='form-control'
                            onChange={(e) =>
                              handlChangeRow(e.target.value, index, colIndex)
                            }
                          />
                        </td>
                      );
                    })}
                    <td>
                      <button
                        type='button'
                        className='btn btn-sm btn-outline-danger'
                        onClick={()=>handleDeleteRow(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button
          type='button'
          className='form-control btn btn-outline-dark mt-2'
          onClick={() => addRow()}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default Table;
