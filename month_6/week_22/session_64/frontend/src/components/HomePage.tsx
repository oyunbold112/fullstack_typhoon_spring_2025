import { Link } from 'react-router-dom';
import type { Todo } from '../types/todo';
import './HomePage.css';

interface HomePageProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <h1 className="page-header">Миний даалгавар</h1>
      {todos.length === 0 ? (
        <p>Одоогоор даалгавар байхгүй байна.</p>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`todo-text ${todo.completed ? 'completed' : ''}`}
              >
                {todo.text}
              </span>
              <div className="todo-actions">
                <Link to={`/todo/${todo.id}`} className="btn-link">Дэлгэрэнгүй</Link>
                <Link to={`/edit/${todo.id}`} className="btn-link edit">Засах</Link>
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Устгах</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;

