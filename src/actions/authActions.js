import { TYPES } from 'types/types'
import { firebase, googleAuthProvider } from 'firebase/config'
import { getGoogleUser } from './authHelpers'

export const startGoogleLogin = () => {
  return dispatch => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(data => {
        const userInformation = getGoogleUser(data)
        dispatch(authLogin(userInformation))
      })
  }
}

export const startLogout = () => {
  return dispatch => {
    firebase.auth().signOut()
    dispatch(authLogout())
  }
}

// ---

export const authLogin = (userInformation) => ({
  type: TYPES.login,
  payload: {
    ...userInformation
  }
})

export const authLogout = () => ({
  type: TYPES.logout
})
