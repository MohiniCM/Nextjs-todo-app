
import { useEffect, useState } from "react";
    export default function Home() {
        const [todos, setTodos] = useState([]);
        const [newTodo, setNewTodo] = useState('')

        //fetch todos
        useEffect(() => {
            fetchTodos();
        })

        const fetchTodos = async () => {
            const response = await fetch("/api/todos");
            const data = await response.json();
            setTodos(data);
        };
        const addTodo = async () => {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTodo })
            })
            const data = await response.json();
            setTodos([...todos, data]);
            setNewTodo('')
        };
        return (
            <>
                <div style={{ padding: '20px' }}>
                    <h1>Todo App</h1>
                    <div style={{ marginBottom: 20 }}>
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="Enter new Todo"
                            style={{ marginRight: 10, padding: 5 }}
                        />

                        <button style={{ padding: 5 }} onClick={addTodo}>
                            Add Todo
                        </button>
                    </div>

                    <div>
                        <ul>
                            {todos.map((todo) => (
                                <li key={todo.id}> {todo.title} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
