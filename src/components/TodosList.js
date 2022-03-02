import React from 'react'
import StyledTodosList from './styles/styledTodosList'

const TodosList = ({ todos, setTodos, setEditTodo, setInput }) => {

    const handleDeleteClick = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setInput("");   //Logic to delete the item

    }
    const handleEditClick = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleCompleteClick = (todo) => {
        setTodos(
            todos.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        );
    }
    return (
        <StyledTodosList>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input type="text" value={todo.title} className={`list ${todo.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleCompleteClick(todo)}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEditClick(todo)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDeleteClick(todo)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </StyledTodosList>
    );
}
export default TodosList;