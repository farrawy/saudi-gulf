import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import ProjectImageList from './ProjectImageList'

export default function ScrollDialog({ title, description, image }) {
  const [open, setOpen] = React.useState(false)
  const [scroll, setScroll] = React.useState('paper')

  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>Learn More</Button>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitle id='scroll-dialog-title'>{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <ProjectImageList />
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>
            <a href='#contact'>Get a quote</a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
