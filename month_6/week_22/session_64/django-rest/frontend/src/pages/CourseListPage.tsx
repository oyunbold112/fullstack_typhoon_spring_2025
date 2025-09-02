// src/pages/CourseListPage.tsx
import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/api';
import { Course } from '../types/course';

const CourseListPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Хичээлүүдийг татахад алдаа гарлаа:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Ачааллаж байна...</p>;

  return (
    <div>
      <h1>Хичээлийн жагсаалт</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>Багш: {course.teacher.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListPage;
