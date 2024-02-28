import './App.css'

import { Route } from 'wouter'

import { LandingPage } from './assets/pages/landingPage'
import { SignInPage } from './assets/pages/signIn'
import { Dashboard } from './assets/pages/dashboard'

function App() {
  return (
    <>
      <Route path="/" component={LandingPage} />
      <Route path="/SignLog" component={SignInPage} />
      <Route path='/Dashboard' component={Dashboard}/>
    </>
  )
}

export default App;