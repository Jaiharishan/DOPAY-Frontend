import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import CardArray from '../components/CardArray'
import CreateOrgSection from '../components/CreateOrgSection'
import Navbar from '../components/Navbar'
import userState from '../helpers/atoms/userAtom'
import axios_api from '../helpers/axios/axios_api'
import { Iuser } from '../helpers/interfaces/userInterface'

const index = () => {
  const [user, setUser] = useRecoilState<Iuser | {}>(userState)

  useEffect(() => {
    ;(async () => {
      const result = await axios_api.get('self')
      console.log(result.data.user)
      setUser(result.data.user)
    })()
  }, [])
  console.log(user)
  return (
    <>
      <Navbar />

      <CreateOrgSection />

      <CardArray Title={'Your Organizations'} />
      <CardArray Title={'Sports Organizations'} />
    </>
  )
}

export default index
