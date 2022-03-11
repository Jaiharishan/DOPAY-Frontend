import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import axios_api from '../helpers/axios/axios_api'
import NotificationBar from './NotificationBar'
import { useRouter } from 'next/router'
import { TrashIcon } from '@heroicons/react/outline'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
}

export default function DeletePaymentModal({ payment_id, org_id }: any) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDeletePayment = async () => {
    const result = await axios_api.delete(`payment/delete/${payment_id}`)

    if (result) {
      router.push(`/organization/${org_id}`)
    }

    // setMessage(result.data.message)
  }

  return (
    <>
      <div>
        <TrashIcon className="h-5 w-5 stroke-white" onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            className="flex-col items-center justify-center rounded-lg bg-white dark:bg-white dark:text-gray-800"
          >
            <p className="my-1 text-2xl font-bold">Delete</p>
            <p className="text-md my-1">Once deleted it can't be restored.</p>

            <div className="flex gap-3">
              <button
                className="my-2 rounded-lg bg-red-600 px-4 py-2 text-white transition duration-200 hover:bg-red-500"
                onClick={handleDeletePayment}
              >
                Delete
              </button>
              <button
                className="my-2 rounded-lg border border-red-600 px-4 py-2"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  )
}
