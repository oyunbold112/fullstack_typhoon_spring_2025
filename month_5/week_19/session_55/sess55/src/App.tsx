import './App.css'
import ItemList from './components/ItemList'
import UserAge from './components/UserAge'
import UserLocation from './components/UserLocation'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
      <UserProfile/>
      <UserLocation/>
      <UserAge/>
      <ItemList/>
    </>
  )
}

export default App
