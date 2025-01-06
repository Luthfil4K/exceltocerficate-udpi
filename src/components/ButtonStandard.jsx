
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { handleDownloadTable } from '../utils/handleDownloadTable';
import { handleImportExcel } from '../utils/handleImportExcel';




const ButtonStandard = (props) => {

  
  const handleButtonClick = (kegiatan) => {
    handleDownloadTable(kegiatan);  
  }

  const handleNothing = () => {
    console.log("button clicked")
  }
  
  return (
    <Button
      sx={{
        backgroundColor: "#1e1f49",
        "&:hover": {
          backgroundColor: "#40429f",
        },
      }}
      onClick={
        props.title == "Unduh Template Excel"
          ? props.title == "Import Template Excel"
            ? () => handleImportExcel()
            : () => handleButtonClick(props.kegiatan)
          : handleNothing
      }
      variant="contained"
      fullWidth
      size="large">
      {props.title}
    </Button>
  );
}

export default ButtonStandard
