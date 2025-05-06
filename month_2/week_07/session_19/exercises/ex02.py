# dasgal 1
class Counter:
    count = 0
    def __init__(self):
        Counter.count += 1
        self.id = Counter.count
    def __str__(self):
        return f"P{self.id}"
# Тест
counter1 = Counter()
counter2 = Counter()
counter3 = Counter()
counter4 = Counter()
print(counter1)
print(counter2)
print(counter3)
print(counter4)
print(f"Total counters created: {Counter.count}")

# dasgal 2
# TODO
class Student:
    student_count = 0
    school_name = ""
    def __init__(self, name):
        Student.student_count += 1
        self.grades = []
        self.name = name
    def add_grade(self, grade):
        self.grades.append(grade)
    def get_average(self):
        return sum(self.grades) / len(self.grades)
    
# Тест
student1 = Student("Alice")
student2 = Student("Bob")
student3 = Student("Charlie")
# Дүнгүүд нэмэх
student1.add_grade(92)
student1.add_grade(88)
student1.add_grade(95)
student2.add_grade(75)
student2.add_grade(82)
student3.add_grade(90)
student3.add_grade(85)
student3.add_grade(88)
student3.add_grade(92)
# Мэдээлэл харуулах
print(f"School: {Student.school_name}")
print(f"Total students: {Student.student_count}")
print("\nStudent information:")
for student in [student1, student2, student3]:
    print(f"{student.name} - Grades: {student.grades}")
    print(f"Average: {student.get_average():.1f}")
    print("-" * 20)
# Сургуулийн нэрийг өөрчлөх
Student.school_name = "Advanced Python Academy"
print(f"\nNew school name: {Student.school_name}")
print(f"Student1's school: {student1.school_name}")
print(f"Student2's school: {student2.school_name}")

# dasgal 3

class Product:
    store_name = "Temu"
    discount_rate = 0
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def apply_discount(self):
        if Product.discount_rate == 0:
            return self.price
        return self.price - self.price * Product.discount_rate
    def total_value(self):
        return self.price * self.quantity
    def __str__(self):
        return f"{self.name}"
# Тест
product1 = Product("Laptop", 1200, 5)
product2 = Product("Phone", 800, 10)
product3 = Product("Headphones", 100, 20)
products = [product1, product2, product3]
# Бүтээгдэхүүнүүдийн мэдээлэл
print(f"Store: {Product.store_name}")
print(f"Discount rate: {Product.discount_rate * 100:.0f}%")
print("\nProducts:")
for product in products:
    print(product)
    print(f"Total value: ${product.total_value():.2f}")
    print(f"After discount: ${product.apply_discount():.2f}")
    print("-" * 30)
# Хөнгөлөлтийн хувь хэмжээг өөрчлөх
Product.discount_rate = 0.2 # 20% discount
print(f"\nNew discount rate: {Product.discount_rate * 100:.0f}%")
print("Updated discounted prices:")
for product in products:
    print(f"{product.name}: ${product.apply_discount():.2f}")

# dasgal 4

class Temperature:
    def __init__(self, ):
        pass