import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import ListTotal from './components/ListTotal';
import './App.css';
import { ClassNameContainer, ClassNameAppWrapper } from './components/styles/styledApp'

const App = () => {
    const storage = JSON.parse(localStorage.getItem("todos")); // Ler item:
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(storage);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)); // Criar item:
    }, [todos]);
    return (
        <ClassNameContainer>
            <ClassNameAppWrapper>
                    <Header />
                <React.Fragment>
                    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
                </React.Fragment>
                <React.Fragment>
                    <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} setInput={setInput} />
                </React.Fragment>
                <React.Fragment>
                    <ListTotal
                        listTotal={todos.length}
                        listDone={todos.filter((todo) => todo.completed).length}
                    />
                </React.Fragment>
            </ClassNameAppWrapper>
        </ClassNameContainer>

    );
}
export default App;