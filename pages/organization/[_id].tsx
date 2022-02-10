import React, { FC, useContext } from 'react'
import axios_ from '../../helpers/axios/axios'
import { useState, useEffect } from 'react'
import axios_api from '../../helpers/axios/axios_api'
import Iorg from '../../helpers/interfaces/organizationInterface'
import Navbar from '../../components/Navbar'
import { CreditCardIcon, PencilIcon, UserIcon } from '@heroicons/react/outline'
import randomColors from '../../helpers/colors'
import Link from 'next/link'
import PaymentsSection from '../../components/PaymentsSection'
import { Iuser } from '../../helpers/interfaces/userInterface'
import UserContext from '../../helpers/contexts/userContext'

// This is the organization page component
// /organization/:id

const Organization: FC<Iorg> = ({ org }: any) => {
  const user = useContext(UserContext)

  console.log('user:', user)

  console.log(org)

  const handleAddMembers = () => {}

  const handleJoinOrg = () => {}

  const handleAddPayments = () => {}

  return (
    <>
      <Navbar />

      {/* header */}
      <div className="m-auto mt-10 flex w-full flex-col px-3 md:w-5/6 md:flex-row">
        <div className="flex w-full items-center justify-start md:w-1/2">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            {org?.profilePic ? (
              <img src={org.profilePic} className="h-full w-full rounded-lg" />
            ) : (
              <div className="h-full w-full rounded-lg bg-sky-300"></div>
            )}

            {org?.heads?.includes(user._id) && (
              <div className="absolute -bottom-1 -right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-sky-400">
                <Link href={`/organization/edit/${org._id}`}>
                  <a>
                    <PencilIcon className="h-6 w-6 stroke-white" />
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mt-4 text-2xl font-bold md:text-4xl">{org.name}</div>
          <div className="mt-3 md:text-lg">{org.email}</div>
          <div className="mt-3 flex items-center gap-1 dark:text-gray-200 md:text-lg">
            <UserIcon className="h-5 w-5 dark:stroke-sky-400" />
            <p>members </p>
            <p>{org?.members.length}</p>
          </div>
          <div className="mt-3 flex items-center gap-1 dark:text-gray-200 md:text-lg">
            <CreditCardIcon className="h-5 w-5 dark:stroke-sky-400" />
            <p>payments </p>
            <p>{org?.payments.length}</p>
          </div>
          <div className="mt-4 flex gap-2">
            {org.tags &&
              org.tags.map((tag: string, i: number) => (
                <div
                  key={i}
                  className={
                    randomColors() +
                    ' text-md cursor-pointer rounded-full px-3 py-1 text-white'
                  }
                >
                  {tag}
                </div>
              ))}
          </div>

          <div className="mt-3 flex items-center gap-4 self-start ">
            {/* check if user is heads and then shows add members or else it shows join now */}
            {org?.heads?.includes(user._id) ? (
              <button
                className="rounded-lg border border-sky-400 bg-sky-400 px-4 py-2 text-white hover:bg-transparent"
                onClick={handleAddMembers}
              >
                Add members
              </button>
            ) : (
              <button
                className="rounded-lg bg-sky-400 px-4 py-2 text-white hover:bg-sky-500"
                onClick={handleJoinOrg}
              >
                Join now
              </button>
            )}

            {/* checks if user is the head and renders and adds add payment btn */}
            {org?.heads?.includes(user._id) && (
              <Link href={`/organization/payment/create/${org._id}`}>
                <a>
                  <button
                    className="rounded-lg border border-sky-400 px-4 py-2 transition duration-200 hover:bg-sky-400 hover:text-white"
                    onClick={handleAddPayments}
                  >
                    Add payments
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* divider line */}
      <div className="m-auto mt-10 w-5/6 border-b border-gray-300 dark:border-gray-600"></div>

      {/* description */}
      <div className="m-auto mt-8 flex w-full flex-col items-center px-2 md:w-5/6">
        <p className="text-3xl">About {org.name}</p>
        <p className="mt-5 text-lg dark:text-gray-300">{org.description}</p>
      </div>

      {/* divider line */}
      <div className="m-auto mt-10 w-5/6 border-b border-gray-300 dark:border-gray-600"></div>

      {/* payments */}

      <PaymentsSection
        org_id={org._id}
        isHead={org?.heads?.includes(user._id)}
      />
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
  const _id = context.params._id
  const res = await axios_.get(`organization/${_id}`)
  const org = res.data.organization
  // console.log(org)
  return {
    props: { org: org },
  }
}

export default Organization
