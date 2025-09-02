// src/App.tsx
import React from 'react';
import CourseListPage from './pages/CourseListPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* Энд Routing хийж болно */}
        <CourseListPage />
      </header>
    </div>
  );
}

export default App;
