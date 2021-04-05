import React, { useContext } from 'react'
import { Context } from '../../context'

export const CustomButton = ({ text, onClick }) => {
    const { deleteTodo, completeTodo } = useContext(Context)

    console.log(deleteTodo)
    console.log(completeTodo)

    return <button onClick={onClick}>{text}</button>
}