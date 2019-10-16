import {useReducer} from "react";
import * as React from 'react'
import { IAppContext, Action, AppContext } from "./context/appContext";
// import * as types from './const/mutationsTypes'
import TodoList from './components/todoList/TodoList'

const initialState: IAppContext = {
    todoList: []
}
const reducer = (state: IAppContext, action: Action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'setStatus':
            return {
                ...state,
                todoList: state.todoList.map(todo =>
                    todo.id === action.payload.id ? {...todo, status: 'done'} : todo)
            }
        default:
            return state
    }
}
const App: React.FC = () => {
    const [appState, appDispatch]: [IAppContext, React.Dispatch<Action>] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            <TodoList/>
        </AppContext.Provider>
    )
}
export default App
