import React, { FC } from 'react'

const SearchBar: FC = () => {
  return (
    <div className="mx-2 hidden items-center gap-2 rounded-lg border border-gray-300 px-2 py-2 dark:border-gray-600 md:flex md:w-3/5">
      <input
        type="text"
        className="w-full border-none bg-transparent outline-none dark:text-white"
      />
      <img
        className="h-5 w-5 cursor-pointer"
        src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"
      />
    </div>
  )
}

export default SearchBar
