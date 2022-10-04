import { useEffect,useState } from "react";
import QuestionsData from "../../Questions.json";
import "./quizcard.css";
import ShowScore from "./ShowScore";

function QuizCard({ user }) {
  const [currentQt, setCurrentQt] = useState(0);
  const [questions, setQuestions] = useState(QuestionsData.slice(currentQt, currentQt + 1));
  const [showScore, setShowScore]=useState(false)
  const[chosen, setChosen] = useState({
    chosenOption:'',
    selected: null
})
  const[score, setScore] = useState(0)

  const handleAnswerClick = (option, index) => {
    setChosen({
      chosenOption:option,
      selected: index
    })
    console.log(option);
    console.log(chosen.selected);
  };
  
  const handleNext = (isCorrect) =>{
    if(chosen.chosenOption === isCorrect){
    setScore(score + 1)
    }
    if (currentQt + 1 < QuestionsData.length) {
      setCurrentQt((prev) => prev + 1);
    } else {
      setShowScore(true)
    }
  }
  useEffect(() => {
    setQuestions(QuestionsData.slice(currentQt, currentQt + 1));
    setChosen({
      selected:null
    })
  }, [currentQt]);

  // custom for the answer options
  const CustomButton = ({index,option,param}) =>{
    return(
      <button onClick={() => handleAnswerClick(option,index)} className={index === chosen.selected ? 'selected' : 'ansBtn' }>
          {param.answerOptions[index].answertext}
      </button>
    )
  }

  return (
    <div className="wrapper">
      {showScore? <ShowScore user={user} total={QuestionsData.length} score={score}/> :
      <section className="quizcard">
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
            <div className="quizcard__ansContainer">
              <div className="quizcard__ansDiv">
               <CustomButton index={0} option={'A'} param={ans}/>
               <CustomButton index={1} option={'B'} param={ans}/>
               <CustomButton index={2} option={'C'} param={ans}/>
               <CustomButton index={3} option={'D'} param={ans}/>
             </div>
              <button className="next-btn" onClick={()=>{handleNext(ans.isCorrect)}}>Next>></button>
            </div>
            
          );
        })}
      </section>}
    </div>
  );
}
export default QuizCard;
