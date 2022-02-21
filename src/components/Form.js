import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo, storage }) => {
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
    const checkItemExists = ({title}) => {   
    }

    const checkIfItemExists = ({input}) => {
        const items = storage;
        let itemExists = false
        if (items) {
          itemExists =  items.find(item => item.input === input)
        }
        return itemExists
      }

    const onFormSubimit = (event) => {
        event.preventDefault();
        checkIfItemExists({input});
        if (!editTodo) { //mudar depois a condição
            setTodos([...todos, {
                id: uuidv4(),
                title: input,
                completed: false
            }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }
    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <form onSubmit={onFormSubimit}>
            <input type='text' placeholder='Insira o nome da tarefa' className='task-input' value={input} onChange={onInputChange} required></input>
            <button className='button-add' type='submit'>{editTodo ? 'Alterar' : 'Adicionar'}</button>
        </form>
    );
}

export default Form