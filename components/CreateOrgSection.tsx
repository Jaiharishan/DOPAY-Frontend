import React, { FC } from 'react'
import Link from 'next/link'
const CreateOrgSection: FC = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center py-4 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center md:w-1/2">
        <img
          src="./undraw_building_blocks_re_rwls.svg"
          alt="create-org"
          className="h-96 w-96"
        />
      </div>
      <div className="mt-10 flex w-full flex-col items-center justify-center md:mt-0 md:w-1/2">
        <p className="mb-10 w-4/6 text-3xl font-bold md:text-4xl lg:text-5xl">
          Create Your Own Organization
        </p>
        <p className=" w-4/6 dark:text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit error
          sit tempora molestiae ducimus, iusto eos soluta necessitatibus
          repellendus voluptatem nihil? Ad, aut necessitatibus id nesciunt
          beatae ipsam voluptate saepe!
        </p>
        <div className="mt-8  w-4/6">
          <Link href="/organization/create">
            <a>
              <button className="self-start rounded-lg bg-sky-400 px-6 py-2 text-xl text-white hover:bg-sky-500">
                Create now
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateOrgSection
