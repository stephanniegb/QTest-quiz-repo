import { useEffect,useState } from "react";
import QuestionsData from "../../Questions.json";
import "./quizcard.css";
import ShowScore from "./ShowScore";

function QuizCard({ user }) {
  const [currentQt, setCurrentQt] = useState(0);
  const [questions, setQuestions] = useState(QuestionsData.slice(currentQt, currentQt + 1));
  const [showScore, setShowScore]=useState(false)
  const[score, setScore] = useState(0)
  
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    if (currentQt + 1 < QuestionsData.length) {
      setCurrentQt((prev) => prev + 1);
    } else {
      setShowScore(true)
    }
    
  };
  useEffect(() => {
    setQuestions(QuestionsData.slice(currentQt, currentQt + 1));
  }, [currentQt]);

  return (
    <div className="wrapper">
      {showScore? <ShowScore user={user} total={QuestionsData.length} score={score}/>:<section className="quizcard">
        <div className="quizcard__qutDiv">
          <span className="quizcard__qutNum">
            Question {currentQt + 1}/
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
              <button onClick={() => handleAnswerClick(ans.answerOptions[0].isCorrect)} className="ansBtn">
                {ans.answerOptions[0].answertext}
              </button>
              <button onClick={() => handleAnswerClick(ans.answerOptions[1].isCorrect)} className="ansBtn">
                {ans.answerOptions[1].answertext}
              </button>
              <button onClick={() => handleAnswerClick(ans.answerOptions[2].isCorrect)} className="ansBtn">
                {ans.answerOptions[2].answertext}
              </button>
              <button onClick={() => handleAnswerClick(ans.answerOptions[3].isCorrect)} className="ansBtn">
                {ans.answerOptions[3].answertext}
              </button>
            </div>
          );
        })}
      </section>}
    </div>
  );
}

export default QuizCard;
