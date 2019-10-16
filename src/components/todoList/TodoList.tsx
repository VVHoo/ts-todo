import {useContext} from "react";
import * as React from 'react'
import { AppContext } from '../../context/appContext'
import './todoList.scss'
const TodoList = () => {
    const { appState, appDispatch } = useContext(AppContext)
    const list = appState.todoList
    const addTodo = () => {
        appDispatch({
            type: 'addTodo',
            payload: {id: new Date().getTime(), content: 'todo', status: 'undo'}
        })
    }
    const setStatus = (todo: todos.ITodoData) => {
        appDispatch({
            type: 'setStatus',
            payload: todo
        })
    }
    return (
        <div className='todo-list'>
            <div className='card'>
                <h3>TODO LIST</h3>
                <div className='list'>
                    {
                        list.map((item, index) => (
                            <div key={index} className='list-item'>
                                <button onClick={() => { setStatus({id: item.id, content: item.content, status: 'done'})}}>done</button>
                                {item.id},{item.status}
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={addTodo}>add to do</button>
        </div>
    )
}
export default TodoList
