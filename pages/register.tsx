import React, { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios_auth from '../helpers/axios/axios_auth'

const register: FC = () => {
  const router = useRouter()

  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleSubmit = async () => {
    const result = await axios_auth.post('user/register', {
      userName,
      email,
      password,
      confirmPassword,
    })

    // redirects to the same page
    if (result.status !== 200) {
      router.push('/register')
    }

    // redirects to login page
    router.push('/login')

    console.log(result)

    // success
  }

  return (
    <>
      <div className="flex items-center justify-between">
        {/* img */}
        <div className="hidden h-screen w-2/4 items-center justify-center bg-gray-900 md:flex">
          <img
            className="h-96 w-96"
            src="./undraw_welcoming_re_x0qo.svg"
            alt=""
          />
        </div>

        {/* login cred */}
        <div className="flex h-screen w-full items-center justify-center md:w-1/2">
          <div className="flex w-96 flex-col items-center rounded-lg px-3 py-1 sm:w-4/6">
            <div className="mb-10 flex text-5xl font-bold">
              <p className="">DO</p>
              <p className="">pay</p>
            </div>

            <div className="mb-1 ml-1 self-start">Username</div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="userName"
              className="mb-3 w-full rounded-full border-2 border-gray-800 px-4 py-2 outline-none"
            />

            <div className="mb-1 ml-1 self-start">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="mb-3 w-full rounded-full border-2 border-gray-800 px-4 py-2 outline-none"
            />

            <div className="mb-1 ml-1 self-start">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="mb-3 w-full rounded-full border-2 border-gray-800 px-4 py-2 outline-none"
            />

            <div className="mb-1 ml-1 self-start">Confirm password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              className="w-full rounded-full border-2 border-gray-800 px-4 py-2 outline-none"
            />

            <button
              onClick={handleSubmit}
              type="button"
              className="mt-7 rounded-full  bg-blue-500 px-8 py-2 text-lg text-white"
            >
              Register
            </button>

            <Link href="/login">
              <a className="my-4">
                Have an account?
                <span className="text-secondary text-blue-400">login</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default register
