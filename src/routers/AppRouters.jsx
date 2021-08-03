import { Switch } from 'wouter'

import { useCheckInitialLogin } from 'hooks/useCheckInitialLogin'
import { PublicRouters } from './PublicRouters'
import { PrivateRouters } from './PrivateRouters'

export const AppRouter = () => {
  const { isUserLogged, isUserChecked } = useCheckInitialLogin()

  const routersGroup = () => {
    return <Switch>
      {
        isUserChecked
          ? <PrivateRouters />
          : <PublicRouters />
      }
    </Switch>
  }

  return (
    <>
      {
        isUserLogged
          ? routersGroup()
          : <h1>Loading</h1>
      }
    </>
  )
}
