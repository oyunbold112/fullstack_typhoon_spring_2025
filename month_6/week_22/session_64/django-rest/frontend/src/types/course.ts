// src/types/course.ts
export interface Teacher {
  id: number;
  username: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  teacher: Teacher;
  created_at: string;
}
