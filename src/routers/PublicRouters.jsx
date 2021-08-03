import { Route } from 'wouter'
import { HomePage } from 'pages/HomePage'
import { AuthPage } from 'pages/PublicPages/AuthPage'

export const PublicRouters = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
    </>
  )
}
