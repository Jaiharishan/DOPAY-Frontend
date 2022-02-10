import React, { useState, useEffect, FC } from 'react'
import PaymentCard from './PaymentCard'
import axios_ from '../helpers/axios/axios'
// import moment from 'moment'

const PaymentsSection: FC<string | any> = ({ org_id, isHead }) => {
  const [pastPayments, setPastPayments] = useState([])
  const [activePayments, setActivePayments] = useState([])
  const [paymentStatus, setPaymentStatus] = useState('All')
  const [paymentBarStyle, setPaymentBarStyle] = useState('')

  useEffect(() => {
    ;(async () => {
      const result = await axios_.get(`organization/${org_id}/payments`)
      // console.log(result.data)
      setPastPayments(result.data.pastOrgPayments)
      setActivePayments(result.data.activeOrgPayments)
    })()
  }, [])

  return (
    <div className="m-auto mt-8 flex w-full flex-col items-center px-2 md:w-5/6">
      <p className="text-3xl">Payments</p>

      <div className="mt-5 flex w-full">
        <div
          className="w-1/3 cursor-pointer text-center text-lg"
          onClick={() => {
            setPaymentBarStyle('translate(0, 0)')
            setPaymentStatus('All')
          }}
        >
          All
        </div>
        <div
          className="w-1/3 cursor-pointer text-center text-lg"
          onClick={() => {
            setPaymentBarStyle('translate(100%, 0)')
            setPaymentStatus('Active')
          }}
        >
          Active
        </div>
        <div
          className="w-1/3 cursor-pointer text-center text-lg"
          onClick={() => {
            setPaymentBarStyle('translate(200%, 0)')
            setPaymentStatus('Expired')
          }}
        >
          Expired
        </div>
      </div>

      <div className="mt-4 flex w-full">
        <div
          className={
            'h-0 w-1/3 border border-sky-400 bg-sky-400 transition duration-200'
          }
          style={{ transform: paymentBarStyle }}
        ></div>
      </div>

      {/* <p className="mt-5 text-lg dark:text-gray-300">{org.description}</p> */}
      <div className="mt-10 mb-5 flex w-full flex-col gap-4 md:w-5/6">
        {paymentStatus === 'All' &&
          activePayments.map((payment, i) => {
            return <PaymentCard key={i} payment={payment} isHead={isHead} />
          })}
        {paymentStatus === 'All' &&
          pastPayments.map((payment, i) => {
            return <PaymentCard key={i} payment={payment} isHead={isHead} />
          })}
        {paymentStatus === 'Active' &&
          activePayments.map((payment, i) => {
            return <PaymentCard key={i} payment={payment} isHead={isHead} />
          })}
        {paymentStatus === 'Expired' &&
          pastPayments.map((payment, i) => {
            return <PaymentCard key={i} payment={payment} isHead={isHead} />
          })}
      </div>
    </div>
  )
}

export default PaymentsSection
