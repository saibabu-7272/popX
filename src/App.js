import { Component } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import ProfilePage from './components/ProfilePage'





class App extends Component{
  state = {users : []}
  updateUsers = (newUser) => this.setState(prveState => ({...prveState, newUser}))
  render(){
    const {users} = this.state
    console.log(users)
    return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/create-account" element={<SignUpPage users={users} updateUsers={this.updateUsers}  />}  />
      <Route path="/profile" element={<ProfilePage usersDetails={users} />} />
    </Routes>
  </BrowserRouter>
)
  }
}

export default App