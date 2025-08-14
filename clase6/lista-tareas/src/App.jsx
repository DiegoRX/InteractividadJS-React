import { useReducer } from 'react'
import './App.css'
import { UseReducerComponent } from './useReducerFile'
import { UseEffectComponent } from './useEffectComponent'
import { UserProfile } from './UserProfile'

function App() {



  return (
    <>
      {/* <UseReducerComponent /> */}
      {/* <UseEffectComponent /> */}
      <UserProfile userId={1} />
      <UserProfile userId={6} />
      <UserProfile userId={7} />
      <UserProfile userId={8} />

    </>
  )
}

export default App
