# python loops

fruits = ["alim", "banana", "guzeelzgene"]

# problem --- 100 shirheg jimsnii toroltei list baiwal yah we?

print(fruits[0])
print(fruits[1])
print(fruits[2])

# SOlution - loop buyu dawtalt

# 1. For loop

for fruit in fruits:
    print(fruit)

# 0ees 5 hurtel (orohugi)

for i in range(5):
    print(i) # 0, 1, 2, 3, 4
# 2-oos 8 hurtel
for i in range(2, 8):
    print(i) # 2, 3, 4, 5, 6, 7
#1-ees 10 hurtel, 2 alhmaar
for i in range(1, 10, 2):
    print(i) # 1, 3, 5, 7, 9

# string buyu text 
message = "Python"

# temdegt bureeer dawtalt

for char in message:
    print(char)

# enumerate
fruits = ['alim', 'banana', 'guzeelzgene']

# index bolon elemntiig awah
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")

# todorhoi indexees ehleh

for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")

# break

for i in range(10):
    if i == 5:
        break
    print(i)

# continue
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)

# break heregleegui uyd else ajillana
for i in range(5):
    print(i)
else:
    print("Dawtalt amjilttai duuslaa")

# break heregelsen uyd else heseg ajillahgui
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("Ene heseg ajillahgui")

# double loop
# urjuuleh husnegt

for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print("-----")

# engiin dawtalt

squares = []
for i in range(1, 6):
    squares.append(1 ** 2)
print(squares) # 1, 4, 9, 16, 25
# jagsaaltiin oilgolt
squares = [i**2 for i in range(1, 6)]
print(squares) # 1, 4, 9, 16, 25
# nohtsoltei jagsaaltiin oilgolt
even_squares = [i**2 for i in range(1, 11) if i % 2 == 0]
print(even_squares) # 4, 16, 36, 64, 100