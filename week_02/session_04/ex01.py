# python variables
name = "John"
age = 25
height = 1.75
is_student = True
print(type(name))
print(type(age))
print(type(height))
print(type(is_student))

x = y = z = 0
print(x, y, z)
a, b, c = 1, 2, 3
print(a, b, c)

coordinates = (3, 4)
x, y = coordinates
print(x, y)

a, b = 5, 10
a, b = b, a
print(a, b)

x = 10
print(type(x))

float_number = float(10)
integer = int(3.14)
string_number = str(42)

print(type(float_number))
print(type(integer))
print(type(string_number))

is_active = True
is_completed = False

# AND logic
print(False and False) # false
print(True and False) # false
print(False and True) # false
print(True and True) # true

# OR logic

print(False or False) #false
print(True or False) #true
print(False or True) #true
print(True or True) # true

# NOT logic 

print(not False) # true
print(not True) # false

print(True and False)
print(True or False)
print(not True)

fruits = ["алим", "banana", "intoor"] 
mixed_list = [1, "sain baina", 3.14, True]

first_fruit = fruits[0] # "alim"
last_fruit = fruits[-1] # "intoor"

fruits.append("Ulaan looli") # togsgold nemeh
fruits.insert(1, "mango") # todorhoi bairlald oruulah
fruits.remove("banana") # utgaar ni hasah
popped_fruit = fruits.pop() # suuliin elementiig hasaj butsaah

numbers = [0, 1, 2, 3, 4, 5]
subset = numbers[1:4] # 1, 2, 3

# hyzgaar uusgeh 
numbers = range(5) # 0,1,2,3,4
print(numbers)
#range(ehlel, togsgol)
numbers = range(2, 7) # 2, 3, 4, 5, 6
print(numbers)

#range (ehlel, togsgol, alham)
even_numbers = range(0, 10, 2)

#hyzgaariig jagsaalt bolgoh
numbers_list = list(range(5)) # [0, 1, 2, 3, 4]
print(numbers_list)

x = 10
# niilmel onoolt 

x += 5 #  x = x + 5 (15)
x -= 3 # x = x - 3 (12)
x *= 2 # x = x * 2 (24)
x /= 4 # x = x / 4 (6.0)
x //= 2 # x = x // 2 (3.0)
x %= 2 # x = x % 2 (1.0)
x **=3 # x = x ** 3 (1.0)

#Olon onooolt 
a, b, c = 1, 2, 3

a = 10
b = 5

equal = a == b # false
not_equal = a != b # true
greater_than = a > b # true
less_than = a > b # false
greater_equal = a >= b # true
less_equal = a <= b # false

# ginjin haritsuulalt
result = 1 < 3 < 5 #true (1 < 3 and 3 < 5 gesentei adil)
result = 5 > 3 < 1 # false (5 > 3 and 3 < 1 gesentei adil)