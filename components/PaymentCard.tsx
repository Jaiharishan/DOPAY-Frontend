import React, { useContext, useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import DeletePaymentModal from './DeletePaymentModal'
import axios_api from '../helpers/axios/axios_api'
import { useRouter } from 'next/router'
import UserContext from '../helpers/contexts/userContext'

const PaymentCard = ({
  payment,
  isHead,
  org_id,
  message,
  setMessage,
  openNotif,
  setOpenNotif,
}: any) => {
  const user = useContext(UserContext)
  const deadline = moment(payment.deadline).format('DD MM YYYY')
  const [isOpen, setIsOpen] = useState(false)

  const handlePayment = async () => {
    const result = await axios_api.post(`transaction/${payment._id}/create`, {
      description: 'Paid the payment.',
    })

    if (result) {
      // router.push(`/organization/${org_id}`)
      setMessage(result.data.message)
      setOpenNotif(true)
    }
  }
  return (
    <div
      className="relative flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-300 px-5 py-3 transition duration-200 hover:border-sky-400 dark:border-gray-600 dark:hover:border-sky-400"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex w-3/4 flex-col items-start justify-start gap-2">
        <p className="text-xl font-bold">{payment.name}</p>
        <p className="text-md">Pay before {deadline}</p>
        <p className="text-md justify-self-end">{payment.description}</p>
      </div>
      <div className="flex w-1/4 flex-col items-end justify-between gap-4">
        <p className="text-lg font-bold">Rs.{payment.amount}</p>
        {user._id && payment.paidBy.includes(user._id) ? (
          <button className="rounded-lg bg-sky-500 px-4 py-2 text-white dark:bg-sky-300">
            Paid
          </button>
        ) : (
          <button
            className="rounded-lg bg-sky-400 px-4 py-2 text-white hover:bg-sky-500 dark:hover:bg-sky-300"
            onClick={handlePayment}
          >
            Pay
          </button>
        )}
      </div>

      {/*  to ensure if the user is head and also if its open */}
      {isHead && isOpen && (
        <>
          <div className="absolute -bottom-4 right-3 flex h-7 w-7 items-center justify-center rounded-full  bg-red-500 transition duration-200 hover:scale-105">
            <DeletePaymentModal payment_id={payment._id} org_id={org_id} />
          </div>
          <Link href={`/organization/payment/edit/${payment._id}`}>
            <a>
              <div className="absolute bottom-4 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-green-400 transition duration-200 hover:scale-105">
                <PencilIcon className="h-5 w-5 stroke-white" />
              </div>
            </a>
          </Link>
        </>
      )}
    </div>
  )
}

export default PaymentCard
