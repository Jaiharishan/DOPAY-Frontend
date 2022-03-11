import React, { FC } from 'react'

const MemberCard: FC<any> = ({ name, profile_pic }) => {
  return (
    <div className="w-44 flex-col items-center justify-center rounded-md border border-gray-300 p-2 dark:border-gray-600 md:w-56">
      {profile_pic ? (
        <img
          className="m-auto h-36 w-36 rounded-full md:h-44 md:w-44"
          src={profile_pic}
        />
      ) : (
        <div className="m-auto h-36 w-36 rounded-full bg-sky-300 md:h-44 md:w-44"></div>
      )}
      <p className="mt-4 text-center text-xl">{name}</p>
      {/* <p className="mt-1 text-center text-lg">Head</p> */}
    </div>
  )
}

export default MemberCard
