# dasgal 1
# TODO
class Cat:
    species = "Felis catus"
    def __init__(self, name, color, age):
        self.name = name
        self.color = color
        self.age = age
    def meow(self):
        return f"Meow! I'm {self.name}"
    def __str__(self):
        return f"{self.name} is a {self.color} cat"
    def __repr__(self):
        return f"Cat(name={self.name}, color={self.color})"
    def change_name(self, name):
        self.name = name
        return self.name
    def human_age(self):
        return self.age * 7
# test
mittens = Cat("Mittens", "white", 3)
luna = Cat("Luna", "black", 2)
print(f"Species: {Cat.species}")
print(f"{mittens.name} in human years: {mittens.human_age()}")
print(mittens.change_name("Snowball"))
print(mittens)

class Book:
    def __init__(self, title, author, page, published_year):
        self.title = title
        self.author = author
        self.page = page
        self.published_year = published_year
    def get_age(self):
        return 2025 - self.published_year
    def is_long(self):
        return self.page > 300
# Тест
book1 = Book("The Hobbit", "J.R.R. Tolkien", 295, 1937)
book2 = Book("War and Peace", "Leo Tolstoy", 1225, 1869)
book3 = Book("Python Crash Course", "Eric Matthes", 544, 2019)
books = [book1, book2, book3]
for book in books:
    print(book)
    print(f"Age: {book.get_age()} years")
    print(f"Long book: {'Yes' if book.is_long() else 'No'}")
    print("-" * 30)

class Vehicle:
    def __init__(self, make, model, year, fuel_efficiency):
        self.make = make
        self.model = model
        self.year = year
        self.fuel_efficiency = fuel_efficiency
    def fuel_consumption(self, distance):
        dist = distance / 100
        return self.fuel_efficiency * dist
    def get_age(self):
        return 2025 - self.year
    def __str__(self):
        return f"model: {self.make} {self.model}, year: {self.year}"

# Тест
car1 = Vehicle("Toyota", "Corolla", 2018, 18)
car2 = Vehicle("Ford", "F-150", 2020, 10)
car3 = Vehicle("Tesla", "Model 3", 2022, 0) # Electric car, 0 is specialvalue
vehicles = [car1, car2, car3]
distance = 100 # km
print("Vehicle fuel consumption comparison:")
for vehicle in vehicles:
    print(f"{vehicle}:")
    print(f" Age: {vehicle.get_age()} years")
    if vehicle.fuel_efficiency > 0:
        fuel_used = vehicle.fuel_consumption(distance)
        print(f" Fuel needed for {distance}km: {fuel_used:.2f} liters")
    else:
        print(" Electric vehicle - No fuel consumption")
    print("-" * 30)