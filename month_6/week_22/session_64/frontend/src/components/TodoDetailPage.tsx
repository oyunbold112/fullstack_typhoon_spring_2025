import { useParams, Link } from 'react-router-dom';
import type { Todo } from '../types/todo';
import './TodoDetailPage.css';

interface TodoDetailPageProps {
  todos: Todo[];
}

const TodoDetailPage: React.FC<TodoDetailPageProps> = ({ todos }) => {
  const { id } = useParams<{ id: string }>();
  const todo = todos.find(t => t.id === Number(id));

  if (!todo) {
    return <div>Даалгавар олдсонгүй!</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="page-header">Даалгаврын дэлгэрэнгүй</h1>
      <h2>{todo.text}</h2>
      <p>Төлөв: {todo.completed ? 'Дууссан' : 'Дуусаагүй'}</p>
      <Link to="/"> &larr; Буцах</Link>
    </div>
  );
};

export default TodoDetailPage;
