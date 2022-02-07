import { atom } from 'recoil'

const textState = atom({
  key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
})

export default textState
