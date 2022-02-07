export interface Iuser {
  _id: string
  first_name: string
  description: string
  email: string
  password: string
  profilePic?: string
  cards?: string[]
  organizations?: string[]
  updatedAt: Date
}
