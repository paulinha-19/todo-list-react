import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TagForm } from './styles/styledForm'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const [disable, setDisable] = useState(false);
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {
                title, id,
                completed
            } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);
    const onFormSubimit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            setTodos([...todos, {
                id: uuidv4(),
                title: input.trim(),
                completed: false
            }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }
    const handleInputChange = (event) => {
        let inputValue = event.target.value;
        setInput(inputValue);
    }
    // const getInputValue = (input) => {
    //     console.log("PARAMETRO", input);
    //     let some = todos.some(item => item.title === input);
    //     console.log("SOME", some);
    //     if (some !== disable) {
    //         setDisable(true);
    //     }
    //     return some
    // }
    useEffect(() => {
        setDisable(todos.some(item => item.title === input) || (!input.trim()))
    }, [todos, input]);
    return (
        <TagForm onSubmit={onFormSubimit}>
            <input type='text' name='text' placeholder='Insira o nome da tarefa' className='task-input' value={input} onChange={handleInputChange} required></input>
            <button type='submit' className='button-add' disabled={disable}>{editTodo ? 'Alterar' : 'Adicionar'}</button>
        </TagForm>
    );
}
export default Form
