import { useEffect, useState } from "react";
import { Card, Divider, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ButtonStandard from './ButtonStandard';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

// import { handleImportExcel } from '../utils/handleImportExcel';
import * as XLSX from "xlsx/xlsx.mjs";
import dataRowPI from "../data/dataRowPI";

const EXTENSIONS = ["xlsx", "xls", "csv"];







const EditToolbar = (props) => {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, name: "", age: "", role: "", isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
};


const CardRenderTable = (props) => {

  const [data, setData] = useState(props.dataRowUD);
  const [colDefs, setColDefs] = useState();

  const [rows, setRows] = useState(props.dataRowUD);
  const [cols, setCols] = useState(props.dataColUD);
  const [rowModesModel, setRowModesModel] = useState({});


  // handle import
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
  

  const handleImportExcel = (e) => {
  
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
      const heads = headers.map((head) => ({
        title: head,
        field: head,
        headerClassName: "super-app-theme--header",
        editable: true,
        headerName: head,
        minWidth: 200,
        flex: 1,
      }));
      setCols(heads);
      setColDefs(heads);
  
      //removing header
      fileData.splice(0, 1);
  
      const midErrorData = convertToJson(headers, fileData);
  
      const filteredArray = midErrorData.filter(
        (item) => Object.keys(item).length !== 0
      );
      setData(filteredArray);
      setRows(filteredArray)
      
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

  useEffect(()=>{
    console.log("data")
    console.log(data)
    console.log("rows")
    console.log(rows)
    console.log("cols")
    console.log(cols)
  },[data])
  // end handle import

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleImportExcel}
      />
      <label htmlFor="raised-button-file">
        <Button
          sx={{
            backgroundColor: "#1e1f49",
            "&:hover": {
              backgroundColor: "#40429f",
            },
          }}
          variant="contained"
          component="span">
          Upload
        </Button>
      </label>

      <Box
        sx={{
          overflow: "auto",
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
          backgroundColor: "#101722",
          "& .super-app-theme--header": {
            backgroundColor: "#101722",
          },
        }}>
        <DataGrid
          sx={{
            backgroundColor: "#101722",
            color: "white",
            overflow: "auto",
          }}
          rows={rows}
          columns={cols}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: EditToolbar }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </div>
  );
};

export default CardRenderTable;
