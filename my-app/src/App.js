import './App.css';
import { Home, QuizCard } from './components';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setUser={setUser}/>}></Route>
        <Route path='start' element={<QuizCard user={user}/>}></Route> 
        <Route path='*' element={<div>
          <h1>404</h1>
          <p>this page does not exist</p>
        </div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
