import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import ListTotal from './components/ListTotal';
import './App.css';

const App = () => {
    const storage = JSON.parse(localStorage.getItem("todos")); // Ler item:
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(storage);
    const [editTodo, setEditTodo] = useState(null);
    const [listTotal, setListTotal] = useState(storage);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)); // Criar item:

    }, [todos]);
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <React.Fragment>
                    <Header />
                </React.Fragment>
                <React.Fragment>
                    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
                </React.Fragment>
                <React.Fragment>
                    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} setInput={setInput} />
                </React.Fragment>
                <React.Fragment>
                    <ListTotal listTotal={listTotal} setListTotal={setListTotal} />
                </React.Fragment>
            </div>
        </div>
    );
}
export default App;