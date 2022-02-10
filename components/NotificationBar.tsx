import React, { FC } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Slide, { SlideProps } from '@mui/material/Slide'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

interface IProps {
  status: string
  open: boolean
  setOpen: Function
  message: string
}
const NotificationBar: FC<IProps> = ({ status, open, setOpen, message }) => {
  console.log(status)

  const handleToClose = (event: any, reason: string) => {
    if ('clickaway' == reason) return
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleToClose}>
      <Alert onClose={handleToClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default NotificationBar
