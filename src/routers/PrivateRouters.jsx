import { HomePage } from 'pages/PrivatePages/HomePage'
import { Redirect, Route } from 'wouter'

export const PrivateRouters = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Redirect to="/" />
    </>
  )
}
