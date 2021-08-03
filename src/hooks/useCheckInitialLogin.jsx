import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firebase } from 'firebase/config'
import { authLogin } from 'actions/authActions'

export const useCheckInitialLogin = () => {
  const [isUserChecked, setIsUserChecked] = useState(false)
  const [isUserLogged, setIsUserLogged] = useState(false)
  const dispatch = useDispatch()
  const { uid } = useSelector(state => state.auth)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo?.uid) {
        const userInformation = {
          uid: userInfo.uid || '',
          name: userInfo.displayName || '',
          email: userInfo.email || '',
          imgUrl: userInfo.photoURL || ''
        }

        dispatch(authLogin(userInformation))
        setIsUserChecked(true)
      }
      setIsUserLogged(true)
    })
  }, [])

  useEffect(() => {
    !uid && setIsUserChecked(false)
  }, [uid])

  return {
    isUserLogged,
    isUserChecked
  }
}
