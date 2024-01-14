export const convertToJSON = (data) => {
    const {rows,columns} = data;

  let convertedData = [];
  rows.map((row, index) => {
    let obj = { sno: index + 1 };
    columns.map((col, colIndex) => {
      obj[col] = row[colIndex];
    });
    convertedData.push(obj);
  });
  return convertedData;
};
