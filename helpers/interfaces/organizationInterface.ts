type Iorg = {
  _id: string
  description: string | null
  name: string
  email: string
  profilePic: string | null
  visibility: 'public' | 'private'
  tags: string[] | null
  cards: string[] | null
  members: string[] | null
  payments: string[] | null
  updatedAt: string
}

export default Iorg
