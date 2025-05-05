print("Hello")
"""
huhhu huhhhu huhhhu
bi mongol ulsad amidardag
"""
# hehehehehe
def function(a,b):
    return a+b
print(function(2,3))

# make a class vampire
class Vampire:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"{self.name} is {self.age} years old"

    def __str__(self):
        return f"{self.name} is {self.age} years old"
# use class
vampire = Vampire("Dracula", 400)
print(vampire)
print(vampire.name)
print(vampire.age)