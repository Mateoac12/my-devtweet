import { startLogout } from 'actions/authActions'
import { useDispatch } from 'react-redux'

export const HomePage = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <>
      <h1>Hola! Estas registrado, si quieres puedes desloguearte aqui</h1>
      <button onClick={handleLogout}>Desloguear</button>
    </>
  )
}
