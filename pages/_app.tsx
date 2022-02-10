import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import userContext from '../helpers/contexts/userContext'
import { useState } from 'react'
import axios_api from '../helpers/axios/axios_api'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({})
  // for getting user data and storing in recoil atom
  useEffect(() => {
    ;(async () => {
      const result = await axios_api.get('self')
      // console.log(result.data.user)
      setUser(result.data.user)
    })()
  }, [])
  return (
    <userContext.Provider value={user}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </userContext.Provider>
  )
}

export default MyApp
