import React, { FC, useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import UserContext from '../../helpers/contexts/userContext'
import Link from 'next/link'
import { PencilIcon } from '@heroicons/react/outline'
import Divider from '../../components/Divider'
import axios_api from '../../helpers/axios/axios_api'
import CardArray from '../../components/CardArray'
import TransactionsSection from '../../components/TransactionsSection'

const profile: FC = () => {
  const user = useContext(UserContext)
  const [userOrganizations, setUserOrganizations] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await axios_api.get('self/organizations')
      setUserOrganizations(result.data.organizations)
      //   setMessage(result.data.message)

      //   setOpen(true)
    })()
  }, [])
  return (
    <>
      <Navbar />

      {/* header */}
      <div className="m-auto mt-10 flex w-full flex-col px-3 md:w-5/6 md:flex-row">
        <div className="flex w-full items-center justify-start md:w-1/2">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            {user?.profilePic ? (
              <img src={user.profilePic} className="h-full w-full rounded-lg" />
            ) : (
              <div className="h-full w-full rounded-lg bg-sky-300"></div>
            )}

            <div className="absolute -bottom-1 -right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-sky-400">
              <Link href={`/profile/edit`}>
                <a>
                  <PencilIcon className="h-6 w-6 stroke-white" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mt-4 text-2xl font-bold md:text-4xl">
            {user.first_name}
          </div>
          <div className="mt-3 md:text-lg">{user.email}</div>
          <div className="mt-3 md:text-lg">{user.description}</div>

          <Link href={'/profile/edit'}>
            <a>
              <button className="mt-5 rounded-lg bg-sky-400 px-6 py-2 text-white transition duration-150 hover:bg-sky-300 dark:bg-sky-300 dark:hover:bg-sky-400">
                Edit
              </button>
            </a>
          </Link>
        </div>
      </div>

      {/* divider */}
      <Divider />

      {/* organizations */}
      <div className="m-auto mt-8 flex w-full flex-col flex-wrap items-center px-2 md:w-5/6">
        <p className="text-2xl md:text-3xl">Organizations</p>

        <CardArray Title={''} organizations={userOrganizations} />
      </div>

      {/* divider */}
      <Divider />

      {/* transactions */}
      <div className="m-auto mt-8 flex w-full flex-col items-center px-2 md:w-5/6">
        <p className="text-2xl md:text-3xl">Transactions</p>

        <TransactionsSection />
      </div>
    </>
  )
}

export default profile
