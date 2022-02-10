import React, { FC, useState } from 'react'
import Navbar from '../../../components/Navbar'
import axios_ from '../../../helpers/axios/axios'
import axios_api from '../../../helpers/axios/axios_api'
import randomColors from '../../../helpers/colors'
import { XIcon } from '@heroicons/react/outline'

// /organization/edit/:id

const edit: FC = ({ org }: any) => {
  const [name, setName] = useState<string>(org?.name ? org.name : '')
  const [description, setDescription] = useState<string>(
    org?.description ? org.description : ''
  )
  const [email, setEmail] = useState<string>(org?.email ? org.email : '')
  const [visibility, setVisibilty] = useState<string>(
    org.visibility ? org.visibility : 'public'
  )
  const [tags, setTags] = useState<string[]>(org?.tags ? org.tags : [])
  const [currentTag, setCurrentTag] = useState<string>('')
  const [cards, setCards] = useState<string[]>(org?.cards ? org.cards : [])
  const [currentCard, setCurrentCard] = useState<string>('')
  const [visibilityClass1, setVisibilityClass1] = useState<string>(
    'cursor-pointer rounded-lg border-2 border-sky-400 p-1'
  )
  const [visibilityClass2, setVisibilityClass2] = useState<string>(
    'cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-500 p-1'
  )

  const handleSubmit = async () => {
    const result = await axios_api.put(`organization/edit/${org._id}`, {
      name,
      description,
      email,
      visibility,
      tags,
      cards,
    })

    console.log(result)
  }

  const handleReset = () => {
    setName('')
    setDescription('')
    setEmail('')
    setVisibilty('public')
    setTags([])
    setCurrentTag('')
    setCards([])
    setCurrentCard('')
    setVisibilityClass1('cursor-pointer rounded-lg border-2 border-sky-400 p-1')
    setVisibilityClass2(
      'cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-500 p-1'
    )
  }

  const handleVisibilty1 = () => {
    setVisibilityClass1('cursor-pointer rounded-lg border-2 border-sky-400 p-1')
    setVisibilityClass2(
      'cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-500 p-1'
    )
    setVisibilty('public')
  }

  const handleVisibilty2 = () => {
    setVisibilityClass2('cursor-pointer rounded-lg border-2 border-sky-400 p-1')
    setVisibilityClass1(
      'cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-500 p-1'
    )
    setVisibilty('private')
  }

  const handleTagAddition = () => {
    setTags([...tags, currentTag])
    setCurrentTag('')
  }

  const handleCardAddition = () => {
    setCards([...cards, currentCard])
    setCurrentCard('')
  }

  const popTags = (i: number) => {
    setTags(
      tags.filter((tag) => {
        if (tag !== tags[i]) return tag
      })
    )
  }

  const popCards = (i: number) => {
    setCards(
      cards.filter((card) => {
        if (card !== cards[i]) return card
      })
    )
  }
  const renderTags = () => {
    return tags.map((tag, i) => {
      return (
        <div
          className={
            randomColors() +
            ' flex items-center gap-2 rounded-lg px-3 py-1 text-sm text-white'
          }
        >
          {tag}
          <XIcon className="h-4 w-4 stroke-white" onClick={() => popTags(i)} />
        </div>
      )
    })
  }

  const renderCards = () => {
    return cards.map((card, i) => {
      return (
        <div
          className={
            'text-md flex items-center gap-2 rounded-lg border border-sky-400 px-3 py-1 dark:text-white'
          }
        >
          {card}
          <XIcon className="h-4 w-4" onClick={() => popCards(i)} />
        </div>
      )
    })
  }
  return (
    <>
      <Navbar />
      <div className="w-100 m-5 flex flex-col items-center px-1 md:px-3">
        <img
          src="/undraw_personal_data_re_ihde.svg"
          alt="give-data"
          className="h-64 w-64"
        />
        {/* name */}
        <div className="mb-8 text-3xl">
          Give details for how your organization want to be?
        </div>

        {/* name */}
        <div className="w-full md:w-3/4">
          <p className="text-lg">Name</p>
          <input
            type="text"
            className="input-class"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* description */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Description</p>
          <textarea
            className="input-class"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Email</p>
          <input
            type={'text'}
            className="input-class"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* visibility */}
        <div className="mt-5 flex w-full flex-col gap-1 md:w-3/4">
          <p className="text-lg">Visibility</p>
          <div className="mt-2 flex gap-3">
            <div className={visibilityClass1} onClick={handleVisibilty1}>
              <img
                src="/undraw_community_re_cyrm.svg"
                className="h-48 w-48"
                alt="public"
              />
              <p className="mt-1 text-center text-lg">Public</p>
            </div>

            <div className={visibilityClass2} onClick={handleVisibilty2}>
              <img
                src="/undraw_reading_time_re_phf7.svg"
                className="h-48 w-48"
                alt="private"
              />
              <p className="mt-1 text-center text-lg">Private</p>
            </div>
          </div>
        </div>

        {/* tags */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Tags</p>

          <div className="mt-3 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">{renderTags()}</div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="input-class mt-0 w-1/2"
              />
              <button
                className="rounded-lg bg-sky-400 px-4 py-2 text-white hover:bg-sky-300 dark:hover:bg-sky-500"
                onClick={handleTagAddition}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-5 w-full md:w-3/4">
          <p className="text-lg">Cards</p>

          <div className="mt-3 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">{renderCards()}</div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                value={currentCard}
                onChange={(e) => setCurrentCard(e.target.value)}
                className="input-class mt-0 w-1/2"
              />
              <button
                className="rounded-lg bg-sky-400 px-4 py-2 text-white hover:bg-sky-300 dark:hover:bg-sky-500"
                onClick={handleCardAddition}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* submit & reset */}
        <div className="mt-16 flex w-full items-center gap-4 md:w-3/4">
          <button
            className="w-1/2 rounded-lg bg-green-400 py-2 text-white hover:bg-green-300 dark:hover:bg-green-500"
            onClick={handleSubmit}
          >
            Edit
          </button>
          <button
            className="w-1/2 rounded-lg bg-red-500 py-2 text-white  hover:bg-red-400 dark:hover:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await axios_.get('organization')
  const Ids = res.data.orgs_id

  const paths = Ids.map((id: any): any => {
    const _id = id._id
    return { params: { _id } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const _id = context.params._id
  const res = await axios_.get(`organization/${_id}`)
  const org = res.data.organization
  console.log(org)
  return {
    props: { org: org },
  }
}

export default edit
