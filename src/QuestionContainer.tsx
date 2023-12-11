import { useContext } from 'react'
import { Questions } from './content'
import { Context } from './App'

const QuestionContainer = ({questionProps, index} : {questionProps: Questions, index: number}) => {
    const context = useContext(Context)
    const dispatch = context.dispatch 
    const openIndex = context.openIndex

    let style = openIndex === index ? 'expand' : ''

    const handleClick = () => {
        if(context) {
            dispatch({type: openIndex === index ? 'Reset' : 'Change', index: index})
        }
    }

  return (
    <li className={style} onClick={handleClick}>
        <a href="#">
            <div className="question">
                <div className="question-mark">
                  <img src={`./public/images/question-${index + 1}.svg`} alt="question" />
                </div>
                <div className="content">{questionProps.question}</div>
            </div>
            </a>
            <div className="answer">
            <p>{questionProps.answer[1]}</p>

            <p>{questionProps.answer[2]}</p>
        </div>
    </li>
  )
}

export default QuestionContainer