import React, { FC, useRef } from 'react'
import OrgCard from './OrgCard'
import useScrollBox from '../helpers/hooks/useScrollBox'
interface IProps {
  Title: string
  organizations: any
}

const CardArray: FC<IProps> = ({ Title, organizations }) => {
  const scrollWrapperRef = useRef()
  const { isDragging } = useScrollBox(scrollWrapperRef)

  console.log(organizations)

  return (
    <>
      <div className="mt-10 px-4 text-2xl md:text-3xl">{Title}</div>
      <div className="scroll-box__wrapper" ref={scrollWrapperRef}>
        <div
          className="scroll-box__container my-4 gap-4 px-4"
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}
        >
          {organizations.map((organization: any, i: number) => {
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
      </div>
    </>
  )
}

export default CardArray
