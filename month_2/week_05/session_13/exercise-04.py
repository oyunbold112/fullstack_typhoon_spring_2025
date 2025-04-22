"""
Дасгал: CSV Өгөгдөл Боловсруулагч
Зааварчилгаа:
1. Дараах өгөгдөлтэй 'students.csv' нэртэй CSV файл үүсгэнэ үү:
   Нэр,Математик,Шинжлэх ухаан,Түүх,Англи хэл
   Алиса,85,92,78,95
   Бат,76,88,92,72
   Чарли,90,73,88,84
   Дарина,82,79,87,93
   Эрик,78,96,65,89
2. Програмыг дараах зүйлсийг хийхэд гүйцээнэ үү:
   - CSV файлыг уншина
   - Сурагч бүрийн дундаж оноог тооцоолно
   - Хичээл бүрт хамгийн өндөр оноо авсан сурагчийг олно
   - Үр дүнг 'student_analysis.csv' нэртэй шинэ CSV файл руу бичнэ
Сурах зорилтууд:
- CSV файлтай ажиллах
- Өгөгдөл боловсруулах
- Үүрлэсэн өгөгдлийн бүтэц
- Форматласан гаралттай файл бичих
"""
import csv

def process_student_data(input_file, output_file):
    """
    CSV файлаас сурагчийн дүнгийн өгөгдлийг боловсруулж, дүн шинжилгээг гаралтын файл руу бичнэ.   
    Args:
        input_file (str): Сурагчийн дүнтэй оролтын CSV файлын зам
        output_file (str): Дүн шинжилгээний үр дүнгийн гаралтын CSV файлын зам
    """
    # Таны код энд
    # 1. Оролтын CSV файлыг уншина
    students = []
    content = 0
    with open(input_file, 'r') as file:
        for i in range(5):
            students.append(file.readline().replace('\n', "").split(","))
    print(students) 
    # 2. Сурагч бүрийн дундаж оноог тооцоолно
    math = []
    shinjleh_uhaan = []
    angli = []
    tuuh = []

    average_scores = []
    for i in students:
        average_scores.append((int(i[1]) + int(i[2]) + int(i[3]) + int(i[4])) / 4)    
    
    # 3. Хичээл бүрт хамгийн өндөр оноо авсан сурагчийг олно
    math = dict(sorted(math, reverse=True))
    shinjleh_uhaan = dict(sorted(shinjleh_uhaan, reverse=True))
    tuuh = dict(sorted(tuuh, reverse=True))
    angli = dict(sorted(angli, reverse=True))
    
    # 4. Үр дүнг гаралтын файл руу бичнэ
    with open('student_analysis.csv', 'w') as file:
        average = "suragch, dundaj\n"
        for index, i in enumerate(students):
            average+=f"{i[0]}, {average_scores[index]}\n"
        file.write(average)
        file.close()
    with open('student_analysis.csv', 'a') as file:
        file.write(f"""Hicheel,Ondor Onoo,Suragch
Matematik, 
""")  
    print(average_scores)
    print(f"Дүн шинжилгээ дууслаа. Үр дүнг {output_file} файл руу бичлээ")
# Програмыг ажиллуулна
try:
    process_student_data('students.csv', 'student_analysis.csv')
except FileNotFoundError:
    print("Алдаа: 'students.csv' файл олдсонгүй.")
    print("Энэ програмыг ажиллуулахын өмнө шаардлагатай өгөгдөлтэй энэ файлыг үүсгэнэ үү.")
"""
student_analysis.csv файлын хүлээгдэж буй формат:

Сурагч,Дундаж
Алиса,87.5
Бат,82.0
Чарли,83.75
Дарина,85.25
Эрик,82.0

Хичээл,Хамгийн өндөр оноо,Сурагч
Математик,90,Чарли
Шинжлэх ухаан,96,Эрик
Түүх,92,Бат
Англи хэл,95,Алиса
"""