import React from 'react';
import { convertToJSON } from '../../methods/method';
import exportFromJSON from 'export-from-json';

const SavetoExcel = ({columns,rows}) => {
  const downloadExcelFile = ()=>{
    const data = convertToJSON({columns,rows})
    const fileName = 'data';
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({data,fileName,exportType})

  }
  return (
    <button className='btn btn-success' type='button' onClick={downloadExcelFile}>
      Export Excel
    </button>
  );
};

export default SavetoExcel;
