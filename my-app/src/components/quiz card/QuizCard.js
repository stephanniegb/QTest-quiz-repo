import { useState } from "react";
import QuestionsData from "../../Questions.json";
import "./quizcard.css";
function QuizCard({ user }) {
  const [currentQt, setCurrentQt] = useState(0);
  const [questions, setQuestions] = useState(
    QuestionsData.slice(currentQt, currentQt + 1)
  );
  const handleAnswerClick = () => {
    setCurrentQt((prev) => prev + 1);
    setQuestions(QuestionsData.slice(currentQt, currentQt + 1));
    setQtNumber(qtNumber + 1)
  console.log(currentQt); //the bug is that my initial state is not changing immediately

  };
  const [qtNumber, setQtNumber] = useState(1)
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
