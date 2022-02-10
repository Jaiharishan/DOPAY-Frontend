import React, { useState, FC } from 'react'
import axios_api from '../../../../helpers/axios/axios_api'
import axios_ from '../../../../helpers/axios/axios'
import NotificationBar from '../../../../components/NotificationBar'
import Navbar from '../../../../components/Navbar'

// this component is to create a payment

// /organization/payment/create/:org_id
const create: FC = ({ org_id }: any) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [deadline, setDeadline] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    const result = await axios_api.post(`payment/${org_id}/create`, {
      name,
      description,
      amount,
      deadline,
    })
    setOpen(true)
    setMessage(result.data.message)
    console.log(result)
  }

  const handleReset = () => {
    setName('')
    setDescription('')
    setAmount('')
    setDeadline('')
  }

  return (
    <>
      <Navbar />
      <div className="w-100 m-5 flex flex-col items-center px-1 md:px-3">
        <img
          src="/undraw_personal_data_re_ihde.svg"
          alt="give-data"
          className="h-64 w-64"
        />
        <div className="mb-8 text-3xl">
          Fill in the neccessary details for a payment!
        </div>

        {/* name */}
        <div className="w-full md:w-3/4">
          <p className="text-lg">Name</p>
          <input
            type="text"
            className="input-class"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* description */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Description</p>
          <textarea
            className="input-class"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* amount */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Amount (in Rs.)</p>
          <input
            type="number"
            className="input-class"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* deadline */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Deadline</p>
          <input
            type="date"
            className="input-class"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        {/* submit & reset */}
        <div className="mt-16 flex w-full items-center gap-4 md:w-3/4">
          <button
            className="w-1/2 rounded-lg bg-green-400 py-2 text-white hover:bg-green-300 dark:hover:bg-green-500"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            className="w-1/2 rounded-lg bg-red-500 py-2 text-white  hover:bg-red-400 dark:hover:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      {open && (
        <NotificationBar
          status={'success'}
          open={open}
          setOpen={setOpen}
          message={message}
        />
      )}
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await axios_.get('organization')
  const Ids = res.data.orgs_id

  const paths = Ids.map((id: any): any => {
    const _id = id._id
    return { params: { _id } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const org_id = context.params._id
  return {
    props: { org_id: org_id },
  }
}

export default create
