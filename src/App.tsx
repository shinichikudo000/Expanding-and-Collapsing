import { Dispatch, createContext, useReducer } from 'react'
import { questions } from './content'
import './App.css'
import QuestionContainer from './QuestionContainer'

export interface ContextProps {
  dispatch: Dispatch<Action>,
  openIndex: number
}

export const Context = createContext({} as ContextProps)

export interface Action {
  type: 'Change' | 'Reset',
  index: number
}

const reducer = ( _: number, action: Action) => {
  const {type} = action
  switch(type) {
    case 'Change': {
      return action.index
    }
    case 'Reset': {
      return -1
    }
  }
}

const initialState = -1

function App() {
  const [openIndex, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Context.Provider value={{dispatch, openIndex}}>
        <div className="wrapper">
          <ul>
            {
              questions.map((question, index) => {
                return <QuestionContainer questionProps={question} index={index} />
              })
            }
          </ul>
        </div>
      </Context.Provider>
    </>
  )
}

export default App
