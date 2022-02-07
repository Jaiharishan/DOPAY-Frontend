import React, { FC, useRef } from 'react'
import OrgCard from './OrgCard'
import useScrollBox from '../helpers/hooks/useScrollBox'
interface IProps {
  Title: string
}

const CardArray: FC<IProps> = ({ Title }) => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1]
  const scrollWrapperRef = useRef()
  const { isDragging } = useScrollBox(scrollWrapperRef)
  return (
    <>
      <div className="mt-10 px-4 text-2xl md:text-3xl">{Title}</div>
      <div className="scroll-box__wrapper" ref={scrollWrapperRef}>
        <div
          className="scroll-box__container my-4 gap-4 px-4"
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}
        >
          {array.map((el: number, i: number) => {
            return (
              <OrgCard
                key={i}
                profilePic="https://robohash.org/sittemporereiciendis.png?size=200x200&set=set1"
                name="Tesla Corps"
                members={10}
                payments={12}
                tags={['insti', 'travel']}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CardArray
