import { startGoogleLogin } from 'actions/authActions'
import { useDispatch } from 'react-redux'

export const AuthPage = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <h1>Auth page</h1>
      <button onClick={handleLogin}>Login with google</button>
    </>
  )
}
