import { useTheme } from 'next-themes'
import React, { FC } from 'react'
import { UserIcon, CreditCardIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import randomColors from '../helpers/colors'

interface IProps {
  profilePic: string
  name: string
  members: number
  payments: number
  tags: string[]
}

// const colors: string[] = [
//   'bg-red-300',
//   'bg-orange-300',
//   'bg-amber-300',
//   'bg-yellow-300',
//   'bg-lime-300',
//   'bg-teal-300',
//   'bg-green-300',
//   'bg-emerald-300',
//   'bg-sky-300',
//   'bg-blue-300',
//   'bg-fuschia-300',
// ]

const OrgCard: FC<IProps> = ({ profilePic, name, members, payments, tags }) => {
  const { theme, setTheme } = useTheme()

  return (
    <Link href="/">
      <a>
        <div className="flex w-56 flex-col items-start rounded-lg border border-gray-300 py-3 px-3 transition duration-150 hover:scale-105  dark:border-gray-600">
          <img
            src={profilePic}
            className="h-32 w-32 self-center rounded-full shadow shadow-sky-300"
            alt=""
          />
          <p className="mt-3 text-xl capitalize dark:text-gray-200">{name}</p>
          <p className="text-md flex items-center gap-1 dark:text-gray-200">
            <UserIcon className="h-4 w-4 dark:stroke-gray-400" />
            {members}
          </p>
          <p className="text-md flex items-center gap-1 dark:text-gray-200">
            <CreditCardIcon className="h-4 w-4 dark:stroke-gray-400" />
            {payments}
          </p>
          <div className="mt-3 flex gap-2">
            {tags &&
              tags.map((tag) => (
                <div
                  className={
                    randomColors() +
                    ' rounded-full px-3 py-1 text-sm text-white'
                  }
                >
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default OrgCard
