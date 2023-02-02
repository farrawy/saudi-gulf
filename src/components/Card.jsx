import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard({ image, header, subheader }) {
  return (
    <Card
      sx={{
        maxWidth: 260,
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          src={image}
          style={{
            display: 'block',
            margin: '0 auto',
            width: '100px',
            padding: '1rem',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {header}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {subheader}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
