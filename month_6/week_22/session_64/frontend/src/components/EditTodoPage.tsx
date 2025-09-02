import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Todo } from '../types/todo';

interface EditTodoPageProps {
  todos: Todo[];
  editTodo: (id: number, text: string) => void;
}

const EditTodoPage: React.FC<EditTodoPageProps> = ({ todos, editTodo }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const todoToEdit = todos.find(t => t.id === Number(id));
  
  const [text, setText] = useState(todoToEdit ? todoToEdit.text : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && id) {
      editTodo(Number(id), text);
      navigate('/');
    }
  };

  if (!todoToEdit) {
    return <div>Засварлах даалгавар олдсонгүй!</div>;
  }

  return (
    <div>
      <h1 className="page-header">Даалгавар засварлах</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn btn-success">Хадгалах</button>
      </form>
    </div>
  );
};

export default EditTodoPage;

