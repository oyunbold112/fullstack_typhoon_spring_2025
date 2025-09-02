// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Todo } from './types/todo';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TodoDetailPage from './components/TodoDetailPage';
import AddTodoPage from './components/AddTodoPage';
import EditTodoPage from './components/EditTodoPage';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Vite судлах', completed: true },
    { id: 2, text: 'Компонент бүтээх', completed: false },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />} />
            <Route path="/add" element={<AddTodoPage addTodo={addTodo} />} />
            <Route path="/edit/:id" element={<EditTodoPage todos={todos} editTodo={editTodo} />} />
            <Route path="/todo/:id" element={<TodoDetailPage todos={todos} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
