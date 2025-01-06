import { useState } from "React";
import * as XLSX from "xlsx/xlsx.mjs";
import dataRowPI from "../data/dataRowPI";

const EXTENSIONS = ["xlsx", "xls", "csv"];

const getExention = (file) => {
  const parts = file.name.split(".");
  const extension = parts[parts.length - 1];
  return EXTENSIONS.includes(extension); // return boolean
};

const convertToJson = (headers, data) => {
  const rows = [];
  data.forEach((row) => {
    let rowData = {};
    row.forEach((element, index) => {
      rowData[headers[index]] = element;
    });
    rows.push(rowData);
  });
  return rows;
};

export const importExcel = (e) => {
  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState(dataRowPI);

  const file = e.target.files[0];

  const reader = new FileReader();
  reader.onload = (event) => {
    //parse data
    const bstr = event.target.result;
    const workBook = XLSX.read(bstr, { type: "binary" });

    //get first sheet
    const workSheetName = workBook.SheetNames[0];
    const workSheet = workBook.Sheets[workSheetName];
    //convert to array
    const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });

    const headers = fileData[0];
    const heads = headers.map((head) => ({ title: head, field: head }));
    setColDefs(heads);

    //removing header
    fileData.splice(0, 1);

    const midErrorData = convertToJson(headers, fileData);

    const filteredArray = midErrorData.filter(
      (item) => Object.keys(item).length !== 0
    );
    setData(filteredArray);
  };
  if (file) {
    if (getExention(file)) {
      reader.readAsBinaryString(file);
    } else {
      alert("Invalid file input, Select Excel, CSV file");
    }
  } else {
    setData([]);
    setColDefs([]);
  }

  return data;
};
