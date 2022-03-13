import React from 'react'

const TransactionCard = ({ transaction }: any) => {
  return (
    <div
      className="relative my-2 flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-300 px-5 py-3 transition duration-200 hover:border-sky-400 dark:border-gray-600 dark:hover:border-sky-400"
      //   onMouseEnter={() => setIsOpen(true)}
      //   onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex w-3/4 flex-col items-start justify-start gap-2">
        <p className="text-xl font-bold">{transaction.payment.name}</p>
        <p className="text-md">{transaction.organization.name}</p>
        <p className="text-md justify-self-end">{transaction.description}</p>
      </div>
      <div className="flex w-1/4 flex-col items-end justify-between gap-4">
        <p className="text-lg font-bold">Rs.{transaction.amount}</p>
      </div>
    </div>
  )
}

export default TransactionCard
