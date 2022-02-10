import { useTheme } from 'next-themes'
import React, { useContext, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import CardArray from '../components/CardArray'
import CreateOrgSection from '../components/CreateOrgSection'
import Navbar from '../components/Navbar'
import NotificationBar from '../components/NotificationBar'
import userState from '../helpers/atoms/userAtom'
import axios_api from '../helpers/axios/axios_api'
import UserContext from '../helpers/contexts/userContext'
import { Iuser } from '../helpers/interfaces/userInterface'

const index = () => {
  const user = useContext(UserContext)
  console.log(user)

  const [userOrganizations, setUserOrganizations] = useState([])
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  // getting the oranizations in which user is part of
  useEffect(() => {
    ;(async () => {
      const result = await axios_api.get('self/organizations')
      setUserOrganizations(result.data.organizations)
      setMessage(result.data.message)

      setOpen(true)
    })()
  }, [])

  return (
    <>
      <Navbar />

      <CreateOrgSection />

      <CardArray
        Title={'Your Organizations'}
        organizations={userOrganizations}
      />

      {open && (
        <NotificationBar
          status={'success'}
          open={open}
          setOpen={setOpen}
          message={message}
        />
      )}

      {/* <CardArray Title={'Sports Organizations'} /> */}
    </>
  )
}

export default index
