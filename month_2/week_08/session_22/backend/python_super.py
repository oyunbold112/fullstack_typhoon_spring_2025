import math
class Animal:
    def __init__(self, name, age):
        self.name = name 
        self.age = age
    def info(self):
        return f"{self.name} is {self.age} years old"
class Dog(Animal):
    def __init__(self, name, age,breed):
        super().__init__(name, age) # Call parent's __init__
        self.breed = breed
    def info(self):
        # Extend parents info method
        basic_info = super().info()
        return f"{basic_info} and is a {self.breed}"
rex = Dog("Rex", 3, "German Shepherd")
print(rex.info()) # Rex is 3 years old and is a German Sheperd
print(isinstance(rex,Dog)) # True
print(isinstance(rex, Animal)) # True
print(issubclass(Dog, Animal)) # True
# Exercise
class Shape:
    def area(self):
        pass # Abstract method
    def perimeter(self):
        pass # Abstract method

# Rectangle gedeg class uusgeed tuuniig shape classaaas udamshdag bolgooroi
# Gehdee enehuu klass ni zaawal height, width awag ystoi
# odoo tuuniigee tegsh ontsogtiin talbai bolon perimeteruudiig olood butsaadag bolgooroi
class Rectangle(Shape):
    def __init__(self, height, width):
        self.height = height
        self.width = width
    def area(self):
        return self.height * self.width
    def perimeter(self):
        return 2 * (self.height + self.width)
#
tegsh_ontsogt = Rectangle(10, 15)
print(tegsh_ontsogt.perimeter())
print(tegsh_ontsogt.area())
# Circle
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return self.radius ** 2 * math.pi
    def perimeter(self):
        return self.radius * math.pi * 2
toirog = Circle(10)
print(toirog.area())
print(toirog.perimeter())