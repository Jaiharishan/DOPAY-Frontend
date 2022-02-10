import React, { useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
const PaymentCard = ({ payment, isHead }: any) => {
  const deadline = moment(payment.deadline).format('DD MM YYYY')
  const [isOpen, setIsOpen] = useState(false)
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
        <Link href="/">
          <a>
            <button className="rounded-lg bg-sky-400 px-4 py-2 text-white">
              Pay
            </button>
          </a>
        </Link>
      </div>

      {/*  to ensure if the user is head and also if its open */}
      {isHead && isOpen && (
        <>
          <div className="absolute -bottom-4 right-3 flex h-7 w-7 items-center justify-center rounded-full  bg-red-500 transition duration-200 hover:scale-105">
            <TrashIcon className="h-5 w-5 stroke-white" />
          </div>
          <Link href="/">
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
