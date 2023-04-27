import { useState } from 'react'
import Header from './UI/Header'
//import MainFrame from './UI/MainFrame'
import Meme from './UI/Meme'
import './App.css'

//We'll build our whole app in here, yeeeea
//<MainFrame/>


function App() { //put everything in the return :P
  return (
    <div className='App'>
      <Header/>
      <Meme/>
    </div>
  )
}

export default App
