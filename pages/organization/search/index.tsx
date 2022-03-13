import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import SearchContext from '../../../helpers/contexts/searchContext'
import axios_ from '../../../helpers/axios/axios'
import OrgCard from '../../../components/OrgCard'

const index = () => {
  const [searchQueryContext, setSearchQueryContext] = useContext(SearchContext)
  const [searchOrganizations, setSearchOrganizations] = useState([])

  const handleSearch = async (q: string) => {
    const result = await axios_.get(`organization/search/${q}`)

    if (result) {
      console.log('orgs are:', result)
      setSearchOrganizations(result.data.organizations)
    }
  }
  useEffect(() => {
    if (searchQueryContext == '') {
      handleSearch('j')
    } else {
      handleSearch(searchQueryContext)
    }
  }, [searchQueryContext])
  return (
    <>
      <Navbar />
      <div className="my-5 mx-5 text-2xl">Your search results</div>

      <div className="md:grid-cold-3 grid w-full grid-cols-1 items-center justify-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-5">
        {searchOrganizations.length == 0 && (
          <div className="my-5 mx-2 text-xl">No results found!</div>
        )}
        {searchOrganizations !== [] &&
          searchOrganizations.map((organization: any, i: number) => {
            return (
              <OrgCard
                key={i}
                id={organization._id}
                profilePic={organization?.profilePic}
                name={organization?.name}
                members={organization?.members.length}
                payments={organization?.members.length}
                tags={organization?.tags}
              />
            )
          })}
      </div>
    </>
  )
}

export default index
