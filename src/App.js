import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import ListTotal from './components/ListTotal';
import './App.css';

const App = () => {
    const storage = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(storage);
    const [editTodo, setEditTodo] = useState(null);
    const [listTotal, setListTotal] = useState (storage.length);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
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
                <div className='list-total'>
                    {/* <span>Total: {storage.length} itens</span> */}
                    {console.log(storage)};
                    <ListTotal listTotal={listTotal} setListTotal={setListTotal}/>
                </div>
            </div>
            {/* <div>
                <h2>Aqui</h2>
                {storage.map((keyName, i) => (
                    <li key={i}>
                        <span>Name: {keyName}</span>
                    </li>
                ))}
            </div> */}
        </div>
    );
}
export default App;