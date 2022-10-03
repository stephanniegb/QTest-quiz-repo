import React from 'react'
import'./quizcard.css'
import { useNavigate } from "react-router-dom";

function ShowScore({total, user, score}) {
  const navigate = useNavigate()
  const handleReset = () =>{
    navigate('/')
  }
  return (
    <div className="showScore">
       <h2>{user}, you scored {score} out of {total} <br />
        ({score / total * 100}%)
        </h2> 
        <button className="resetBtn" onClick={handleReset}>Reset Quiz</button>
    </div>
  )
}

export default ShowScore