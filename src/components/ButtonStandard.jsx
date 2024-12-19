
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'


const ButtonStandard = ({children}) => {
  return (
    <Button 
      sx={{
        backgroundColor:'#1e1f49',
        '&:hover': {
          backgroundColor: '#40429f'
        },
       
      }} 
      variant='contained' 
      fullWidth 
      size='large'
    >
      {children}
    </Button>
  )
}

export default ButtonStandard
