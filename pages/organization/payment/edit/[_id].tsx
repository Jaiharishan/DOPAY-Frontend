import React, { useState, FC } from 'react'
import axios_api from '../../../../helpers/axios/axios_api'
import axios_ from '../../../../helpers/axios/axios'
import NotificationBar from '../../../../components/NotificationBar'
import Navbar from '../../../../components/Navbar'

// this component is to create a payment

// /organization/payment/edit/:payment_id
const edit: FC = ({ payment }: any) => {
  const [name, setName] = useState<string>(payment.name)
  const [description, setDescription] = useState<string>(payment.description)
  const [amount, setAmount] = useState<string>(payment.amount)
  const [deadline, setDeadline] = useState<string>(payment.deadline)
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    const result = await axios_api.put(`payment/edit/${payment._id}`, {
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
            disabled
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
  const res = await axios_.get('payment/')
  const Ids = res.data.payments_id

  const paths = Ids.map((id: any): any => {
    const _id = id._id
    return { params: { _id } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const payment_id = context.params._id
  const res = await axios_.get(`payment/${payment_id}`)
  const payment = res.data.payment
  return {
    props: { payment: payment },
  }
}

export default edit
