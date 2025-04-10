# dasgal 1

for i in range(1, 11):
    print(i)

# dasgal 2

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# dasgal 3

ners = ["Bold", "Saraa", "Dorj", "Nara"]

for i in ners:
    print(i)

# dasgal 4

for i in range(1, 21):
    if i ==7:
        break

# dasgal 5

for i in range(1,21):
    if i % 3 == 0:
        continue
    print(i)

# dasgal 6

for i in range(1,6):
    for j in range(1,6):
        print(f"{i} * {j} = {i * j}")
    print('-----')

# dasgal 7

a = 7
b = 4
for i in range(1, 8):
    if i != 1 and i != a:
        x = a % i == 0
        if x:
            print(f"7 anhnii too mon eseh: False")
            break
else:
    print("7 anhnii too mon eseh: True")

for i in range(1, 5):
    if i != 1 and i != b:
        x = b % i == 0
        if x:
            print(f"4 anhnii too mon eseh: False")
            break
else:
    print("4 anhnii too mon eseh: True")
    
# dasgal 8

n = 9
kwadrat_jaglaast = [i ** 2 for i in range(1, n + 1)]
print(kwadrat_jaglaast)

# dasgal 9

jimsnuud = ["alim", "toor", "mango", "guzeelzgene"]

for index, fruit in enumerate(jimsnuud):
    print(f"{index}. {fruit}")

# dasgal 10