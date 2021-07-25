import React , {useEffect, useState} from 'react'
import NavBar from './components/users-component/NavBar'
import '../src/style.css'

const App = (props)=>{

  const [userLoggedIn,setUserLoggedIn] = useState(false)

  const handleAuth = ()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return(
    <div className="App" >
      <h1 style={{textAlign : "center"}} >Billing App</h1>
      <NavBar handleAuth={handleAuth} userLoggedIn={userLoggedIn}/>
    </div>
  )
}

export default App
