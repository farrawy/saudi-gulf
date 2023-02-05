// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import { Button, CardActionArea, CardActions } from '@mui/material'

// export default function MultiActionAreaCard({ title, description, image }) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea onClick={() => alert('Heloo')}>
//         <CardMedia
//           component='img'
//           height='140'
//           image={image}
//           alt='green iguana'
//           className='hover:scale-[1.05] duration-300'
//         />
//         <CardContent>
//           <Typography gutterBottom variant='h5' component='div'>
//             {title}
//           </Typography>
//           <Typography variant='body2' color='text.secondary'>
//             {description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size='small' color='primary' onClick={() => alert('Hello')}>
//           Learn more
//         </Button>
//       </CardActions>
//     </Card>
//   )
// }

import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import ProjectPaper from './ProjectPaper'

export default function MultiActionAreaCard({ title, description, image }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component='img'
            height='140'
            image={image}
            alt='green iguana'
            className='hover:scale-[1.05] duration-300'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' onClick={handleClickOpen}>
            <ProjectPaper
              open={open}
              handleClose={handleClose}
              title={title}
              description={description}
              image={image}
            />
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}
