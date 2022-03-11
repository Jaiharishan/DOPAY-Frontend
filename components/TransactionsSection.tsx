import React, { FC, useEffect, useState } from 'react'
import axios_api from '../helpers/axios/axios_api'
import TransactionCard from './TransactionCard'

const TransactionsSection: FC = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await axios_api.get(`transaction/history`)

      if (result) {
        setTransactions(result.data.transactions)
      }
    })()
  }, [])
  return (
    <div className="my-5 w-full flex-col items-center justify-center md:w-5/6">
      {transactions.map((transaction, i) => {
        return <TransactionCard key={i} transaction={transaction} />
      })}
    </div>
  )
}

export default TransactionsSection
