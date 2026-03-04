import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import WatchList from './components/WatchList';
import AuthToken from './components/AuthToken';

function App() {
  const { token, setToken, logout } = AuthToken();

  if(token){
    return(
      <>
        <button onClick={logout} style={{float: 'right'}}>Logout</button>
        <HomePage />
      </>
    );
  }

  return (
    <>
      <section id='root'>
        <h1>CineQuest!</h1>
        <Login setToken={setToken}/>
        
        <SignUp setToken={setToken}/>
      </section>
    </>
  )
}

export default App

