import './App.css'

import { Route } from 'wouter'

import { LandingPage } from './assets/pages/landingPage'

function App() {
  return (
    <>
      <Route path="/" component={LandingPage} />
    </>
  )
}

export default App;