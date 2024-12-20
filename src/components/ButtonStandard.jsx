
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { handleDownloadTable } from '../utils/handleDownloadTable';  



const ButtonStandard = (props) => {

  console.log(props)
  console.log(props)
  console.log(props)
  console.log(props)
  const handleButtonClick = (kegiatan) => {
    handleDownloadTable(kegiatan);  
  }

  const handleNothing = () => {
    console.log("button clicked")
  }
  
  return (
    <Button 
      sx={{
        backgroundColor:'#1e1f49',
        '&:hover': {
          backgroundColor: '#40429f'
        },
       
      }} 
      onClick={props.title == "Unduh Template Excel" ? handleButtonClick(props.kegiatan):handleNothing}
      variant='contained' 
      fullWidth 
      size='large'
    >
      {props.title}
    </Button>
  )
}

export default ButtonStandard
