import React from 'react';
import { convertToJSON } from '../../methods/method';

const SavetoJSON = ({ rows, columns }) => {
  const downloadJSONFile = () => {
    const data = convertToJSON({rows,columns});
    const fileData = JSON.stringify(data);
    const fileBlob = new Blob([fileData], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(fileBlob);
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = `data.json`;
    a.click();
  };
  return (
    <button className='btn btn-success' type='button' onClick={downloadJSONFile}>
      Save as JSON
    </button>
  );
};

export default SavetoJSON;
