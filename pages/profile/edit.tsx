import React, { FC, useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios_ from '../../helpers/axios/axios'
import axios_api from '../../helpers/axios/axios_api'
import randomColors from '../../helpers/colors'
import { XIcon } from '@heroicons/react/outline'
import UserContext from '../../helpers/contexts/userContext'
import NotificationBar from '../../components/NotificationBar'

// /organization/edit/:id

const edit: FC = () => {
  const user = useContext(UserContext)
  const [name, setName] = useState<string>(
    user?.first_name
      ? user?.first_name
      : '' || user?.userName
      ? user?.userName
      : ''
  )
  const [description, setDescription] = useState<string>(
    user?.description ? user.description : ''
  )
  const [email, setEmail] = useState<string>(user?.email ? user.email : '')
  //   const [visibility, setVisibilty] = useState<string>(
  //     user?.visibility ? user.visibility : 'public'
  //   )
  //   const [tags, setTags] = useState<string[]>(user?.tags ? org.tags : [])
  //   const [currentTag, setCurrentTag] = useState<string>('')
  const [cards, setCards] = useState<string[]>(user?.cards ? user.cards : [])
  const [currentCard, setCurrentCard] = useState<string>('')
  //   const [visibilityClass1, setVisibilityClass1] = useState<string>(
  //     'cursor-pointer rounded-lg border-2 border-sky-400 p-1'
  //   )
  //   const [visibilityClass2, setVisibilityClass2] = useState<string>(
  //     'cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-500 p-1'
  //   )

  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = async () => {
    const result = await axios_api.put(`self/edit`, {
      name,
      description,
      email,
      cards,
    })

    if (result) {
      setMessage(result.data.message)
      setOpen(true)
    }

    console.log(result)
  }

  const handleReset = () => {
    setName('')
    setDescription('')
    setEmail('')
    // setVisibilty('public')
    // setTags([])
    // setCurrentTag('')
    setCards([])
    setCurrentCard('')
  }

  const handleCardAddition = () => {
    setCards([...cards, currentCard])
    setCurrentCard('')
  }

  const popCards = (i: number) => {
    setCards(
      cards.filter((card) => {
        if (card !== cards[i]) return card
      })
    )
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
        <div className="mb-8 text-3xl">Edit your details as you see fit!</div>

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
                className="input-class mt-0 w-full md:w-1/2"
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

      {open && (
        <NotificationBar
          status={'success'}
          open={open}
          setOpen={setOpen}
          message={message}
        />
      )}
    </>
  )
}

export default edit
