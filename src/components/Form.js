import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

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
    const onFormSubimit = (event) => { //input === '' && input.trim()
        event.preventDefault();
        if (input.trim()) { //mudar depois a condição
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
    const getInputValue = (input) => {
        console.log("PARAMETRO", input);
        let some = todos.some(item => item.title === input);
        console.log("SOME", some);
        if (some != disable) {
            setDisable(true);
        }
        return some
    }
    return (
        <form onSubmit={onFormSubimit}>
            <input type='text' name='text' placeholder='Insira o nome da tarefa' className='task-input' value={input} onChange={handleInputChange} required></input>
            <button type='submit' className='button-add' disabled={getInputValue(input)}>{editTodo ? 'Alterar' : 'Adicionar'}</button>
        </form>
    );
}
export default Form