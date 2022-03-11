import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import axios_api from '../helpers/axios/axios_api'
import NotificationBar from './NotificationBar'
import { useRouter } from 'next/router'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
}

export default function AddUserModal({ org_id }: any) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [memberId, setMemberId] = useState<string>('')
  const [message, setMessage] = useState('')
  const [openNotif, setOpenNotif] = useState(false)

  const handleAddMember = async () => {
    const result = await axios_api.post(
      `organization/addUser/${org_id}/${memberId}`
    )

    if (result) {
      router.push(`/organization/${org_id}`)
    }

    // setMessage(result.data.message)
  }

  return (
    <>
      <div>
        <button
          className="light:hover:text-dark rounded-lg border border-sky-400 bg-sky-400 px-4 py-2 text-white transition duration-150 hover:bg-transparent hover:text-black dark:hover:text-white"
          onClick={handleOpen}
        >
          Add members
        </button>
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
            <p className="my-1 text-2xl font-bold">Add Member</p>
            <p className="text-md my-2">
              Enter the Object_Id of the user to add.
            </p>
            <input
              type="text"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              placeholder="Enter the member id"
              className={
                'my-1 w-full rounded-md border border-sky-400 bg-white p-2 outline-none'
              }
            />
            <div className="flex gap-3">
              <button
                className="my-2 rounded-lg border border-sky-400 bg-sky-400 px-4 py-2 text-white"
                onClick={handleAddMember}
              >
                Add
              </button>
              <button
                className="my-2 rounded-lg border border-sky-400 px-4 py-2"
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
