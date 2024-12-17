
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'


const ButtonStandard = ({children,toWhere}) => {

  
  return (

    <Link 
      sx={{ 
        display: 'block',  // Menjadikan Link sebagai elemen blok 
        width: 3000       // Atur lebar sesuai keinginan
      }} 
      fullWidth 
      className='' 
      key={'asd'} 
      to={toWhere}
    >
      <Button 
        sx={{
          backgroundColor:'#1e1f49',
          '&:hover': {
            backgroundColor: '#40429f'
          },
          width:200
        }} 
        variant='contained' 
        fullWidth 
        size='large'
      >
        {children}
      </Button>
    </Link>
  )
}

export default ButtonStandard
