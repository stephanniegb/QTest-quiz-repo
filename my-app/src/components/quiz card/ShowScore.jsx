import React from 'react'
import'./quizcard.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

function ShowScore({total, user, score}) {
  const [finalScore, setFinalScore] = useState(false)
  useEffect(()=>{
    if(score >= 15){
      setFinalScore(true)
    }
  },[])
  const navigate = useNavigate()
  const handleReset = () =>{
    navigate('/')
  }
  return (
    <div className="showScore">
      {finalScore ? <h2><span className='congrats'>Congratulations!!</span> {user} <br />
       You scored {score} out of {total}</h2> : <h2>{user}, you scored {score} out of {total}</h2> }
        <button className="resetBtn" onClick={handleReset}>Reset Quiz</button>
    </div>
  )
}

export default ShowScore