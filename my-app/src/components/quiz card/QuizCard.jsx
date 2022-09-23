import { useEffect } from "react";
import { useState } from "react";
import QuestionsData from "../../Questions.json";
import "./quizcard.css";
function QuizCard({ user }) {
  let randomNumber = QuestionsData.length
  console.log(randomNumber);
  const [currentQt, setCurrentQt] = useState(0);
  const [questions, setQuestions] = useState(
    QuestionsData.slice(currentQt, currentQt + 1)
  );
  const [qtNumber, setQtNumber] = useState(1)

  const handleAnswerClick = () => {
    setCurrentQt((prev) => prev + 1);
    setQtNumber(qtNumber + 1) //the bug is that my initial state is not changing immediately
  };
  useEffect(() =>{
    setQuestions(QuestionsData.slice(currentQt, currentQt + 1));
  },[currentQt])
  return (
    <div className="wrapper">
      <div className="quizcard">
        <div className="quizcard__qutDiv">
          <span className="quizcard__qutNum">
            Question {qtNumber}/
            <small className="quizcard__qutNumSmall">
              {QuestionsData.length}
            </small>
          </span>
          {questions.map((item) => {
            return <h3 className="quizcard__qut">{item.QuestionText}</h3>;
          })}
        </div>
        {questions.map((ans) => {
          return (
            <div className="quizcard__ansDiv">
              <button onClick={handleAnswerClick} className="ansBtn">
                {ans.answerOptions[0].answertext}
              </button>
              <button onClick={handleAnswerClick} className="ansBtn">
                {ans.answerOptions[1].answertext}
              </button>
              <button onClick={handleAnswerClick} className="ansBtn">
                {ans.answerOptions[2].answertext}
              </button>
              <button onClick={handleAnswerClick} className="ansBtn">
                {ans.answerOptions[3].answertext}
              </button>
            </div>
          );
        })}
        {user}
      </div>
    </div>
  );
}

export default QuizCard;
