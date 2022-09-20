import './App.css';
import { Home, QuizCard } from './components';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='start' element={<QuizCard/>}></Route>
        <Route path='*' element={<div>
          <h1>404</h1>
          <p>this page does not exist</p>
        </div>}></Route>
      </Routes>
      {/* <Home/> */}
      {/* <QuizCard/> */}
    </div>
  );
}

export default App;
