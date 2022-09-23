import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { useState} from 'react';
import{Home, QuizCard,ErrorPage} from '../components'

function AppRoute() {
  const [user, setUser] = useState('')
  return (
    <>
    <Routes>
        <Route path='/' element={<Home setUser={setUser}/>}></Route>
        <Route path='start' element={<QuizCard user={user}/>}></Route> 
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </>
  )
}

export default AppRoute