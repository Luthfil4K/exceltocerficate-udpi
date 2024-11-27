import { Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'

const Card1 = (props) => {
  
  return (
    <>
    <div class="card">
      <div class="card2">
        <Typography sx={{fontSize:"20px", fontWeight:600}}>
          {props.title}
        </Typography>
      {/* <p class="heading">Card Hover Effect
      </p><p class="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
        laboriosam at voluptas minus culpa deserunt delectus sapiente
        inventore pariatur
      </p> */}
      </div>
    </div>

    </>
  )
}

export default Card1
