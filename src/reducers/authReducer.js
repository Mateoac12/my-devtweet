import { TYPES } from 'types/types'

// final user state
/*
  auth = {
    uid: "",
    email: "",
    name: "",
    username: "",
    userImg: ""
  }
*/

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case TYPES.login:
      return {
        ...state,
        ...payload
      }

    case TYPES.logout:
      return {}

    default:
      return state
  }
}
