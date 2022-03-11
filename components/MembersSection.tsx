import React, { FC, useEffect, useState } from 'react'
import axios_ from '../helpers/axios/axios'
import MemberCard from './MemberCard'

const MembersSection: FC<string | any> = ({ org_id }) => {
  const [orgMembers, setOrgMembers] = useState<any>()

  useEffect(() => {
    ;(async () => {
      const result = await axios_.get(`organization/${org_id}/members`)
      setOrgMembers(result.data.members)
    })()
  }, [])
  return (
    <div className="m-auto mt-8 flex w-full flex-col items-center px-2 md:w-5/6">
      <p className="text-2xl md:text-3xl">All Members</p>

      <div className="md:grid-col-3 mt-5 grid grid-cols-2 items-center justify-center gap-4 lg:grid-cols-4">
        {orgMembers?.map((elem: any, index: any) => {
          return (
            <MemberCard
              key={index}
              name={elem.first_name}
              profile_pic={elem.profilePic}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MembersSection
