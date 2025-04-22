# Python tuples

# tuples
tuple1 = (1,2,3,4,5) 
tuple2 = 1,2,3,4,5
tuple3 = (1,)
empty_tuple = ()
mixed_tuple = (1, "hoyr", 3.0, True)
list_to_tuple=tuple([1,2,3])

# tuple access
print(1[0])
print(tuple1[-1])
print(tuple1[1:3])

# tuple functions
print(tuple1.count(2))  # 1
print(tuple1.index(3))  # 2
print(len(tuple1))  # 5

print(3 in tuple1)  # True
print(6 in tuple1)  # False

tuple2 = (6, 7, 8)
combined = tuple1 + tuple2
print(combined)   # (1, 2, 3, 4, 5, 6, 7, 8)

repeated = tuple1 * 2
print(repeated)  # (1, 2, 3, 4, 5, 1, 2, 3, 4, 5)

# zadlah tuple
person = ("Бат", 25, "Улаанбаатар")
name, age, city = person
print(name)  # Бат
print(age)   # 25
print(city)  # Улаанбаатар

#swap hiih
a,b = 10,20
a,b = b,a
print(a,b) #20,10

#orgotgoson zadlah
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5

tuple1 = (1, 2, 3, 4, 5)

# to change the tuple
tuple1 = (1, 2, 3, 4, 5)
list1 = list(tuple1)
list1[0] = 10
tuple1 = tuple(list1)
print(tuple1)  # (10, 2, 3, 4, 5)