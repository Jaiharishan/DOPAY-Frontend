import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import userContext from '../helpers/contexts/userContext'
import searchContext from '../helpers/contexts/searchContext'
import { useState } from 'react'
import axios_api from '../helpers/axios/axios_api'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  // for user
  const [user, setUser] = useState({})

  // for search query
  const [searchQueryContext, setSearchQueryContext] = useState<string>('')
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
      <searchContext.Provider
        value={[searchQueryContext, setSearchQueryContext]}
      >
        <RecoilRoot>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </searchContext.Provider>
    </userContext.Provider>
  )
}

export default MyApp
