// / src/services/api.ts
import axios from 'axios';
import { Course } from '../types/course';

const API_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

// Бүх хичээлийг авах
export const getCourses = async (): Promise<Course[]> => {
  const response = await api.get<Course[]>('courses/');
  return response.data;
};

// Нэг хичээл авах
export const getCourse = async (id: number): Promise<Course> => {
  const response = await api.get<Course>(`courses/${id}/`);
  return response.data;
};

// Энд нэвтрэх, бүртгүүлэх, хичээл үүсгэх гэх мэт функцүүдийг нэмж болно.
