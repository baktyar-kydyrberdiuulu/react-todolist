import React, { useContext } from 'react'
import './TodoItem.css'
import { Context } from '../../context'
import { CustomButton } from '../Button'

export const TodoItem = ({ todo, id }) => {

    const { deleteTodo, completeTodo } = useContext(Context)

    return <div className="todo-item" style={todo.complete ? ready : notReady}>
        {todo.text}
        <CustomButton onClick={() => completeTodo(id)} text={todo.complete ? "отменить" : "выполнить"} />
        <CustomButton onClick={() => deleteTodo(id)} text="button" />
    </div>
}

const ready = {
    textDecoration: "line-through"
}

const notReady = {
    textDecoration: "none"
}