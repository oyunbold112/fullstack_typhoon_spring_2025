# for loop ashiglaad 10 udaa hello world gej hewlene uu

for i in range(10):
    print("Hello world!")
    print("############")

for i in range(10):
    print("Hello world!")
    print("############")

# bid nar oorsdoo ymar negen zuil hiideg function todorhoiloy:
def greet (name):
    for i in range(2):
        print(f'Hello {name}')

#function call
greet('boldoo')
greet('oyunbold')
greet('boldnuyo')

def add(a,b):
    """Hoyr toog beneh
    args: 
    a (int/float: Ehnii too)
    b (int/float: Hoyr dahi too)
    Returns:
        int/float: Hoyr toonii niilber
    """
    return a + b

# Funktsiig duudah
result = add(5,3)
print(result)

# 3 parametr awaad tuunii niilberiig ni butsaadag
# addThree gedeg funkts todorhoiloh
# 3 argument ogood tuuniigee shalgaarai
def addThree(a,b,c):
    return a + b + c

# 2 parametr awaad tuunii urjweriig butsaadag
# multiply gedeg funkts todorhoiloh
# 2 argumentdaa utguud ogch funktsee testleh

def multiply(a,b):
    return a * b

print(addThree(20,20,20))
print(multiply(12,2))