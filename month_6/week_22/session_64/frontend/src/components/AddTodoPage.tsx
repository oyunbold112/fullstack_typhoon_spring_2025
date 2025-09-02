
// src/components/AddTodoPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddTodoPageProps {
  addTodo: (text: string) => void;
}

const AddTodoPage: React.FC<AddTodoPageProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      navigate('/');
    }
  };

  return (
    <div>
      <h1 className="page-header">Шинэ даалгавар нэмэх</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Даалгаврын нэрийг оруулна уу"
          className="form-input"
        />
        <button type="submit" className="btn btn-success">Нэмэх</button>
      </form>
    </div>
  );
};

export default AddTodoPage;

