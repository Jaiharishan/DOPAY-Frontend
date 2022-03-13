import React, { FC, useContext, useState } from 'react'
import axios_ from '../helpers/axios/axios'
import SearchContext from '../helpers/contexts/searchContext'
import { useRouter } from 'next/router'
const SearchBar: FC = () => {
  const router = useRouter()
  const [searchQueryContext, setSearchQueryContext] = useContext(SearchContext)

  console.log(searchQueryContext)
  const handleRedirect = () => {
    if (searchQueryContext.length > 0) {
      router.push('/organization/search')
    }
  }

  return (
    <div className="mx-2 hidden items-center gap-2 rounded-lg border border-gray-300 px-2 py-2 dark:border-gray-600 md:flex md:w-3/5">
      <input
        type="text"
        value={searchQueryContext}
        onChange={(e) => setSearchQueryContext(e.target.value)}
        onKeyUp={(e) => {
          if (e.key == ' ' || e.key == 'enter' || e.key == 'Enter') {
            handleRedirect()
          }
        }}
        className="w-full border-none bg-transparent outline-none dark:text-white"
      />
      <img
        className="h-5 w-5 cursor-pointer"
        src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"
        onClick={handleRedirect}
      />
    </div>
  )
}

export default SearchBar
