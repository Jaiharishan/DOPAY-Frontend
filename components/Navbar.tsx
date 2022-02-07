import React, { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import ThemButton from './ThemButton'
import SearchBar from './SearchBar'
import { useRecoilValue } from 'recoil'
import userState from '../helpers/atoms/userAtom'
import Link from 'next/link'
import { Iuser } from '../helpers/interfaces/userInterface'

const Navbar: FC = () => {
  const user = useRecoilValue<Iuser | {}>(userState)
  return (
    <div className="sticky top-0 left-0 z-50 flex items-center justify-between border-b border-gray-300 bg-white px-3 py-4 dark:border-gray-600 dark:bg-[#121212] md:py-4">
      <Link href="/">
        <a>
          <div className="text-2xl font-bold dark:text-white">DOPay</div>
        </a>
      </Link>

      <SearchBar />

      <div className="flex items-center gap-4">
        <ThemButton />
        {user?.profilePic ? (
          <img src={user.profilePic} className="h-8 w-8 rounded-full"></img>
        ) : (
          <div className="h-8 w-8 rounded-full bg-sky-300"></div>
        )}
      </div>
    </div>
  )
}

export default Navbar
