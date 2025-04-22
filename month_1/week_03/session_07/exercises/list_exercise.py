# dasgal 1

durtai_hool = ["tsuivan", "gulyash", "ondog", "budaatai huurga", "tahia"]

print(f"Ehnii hool: {durtai_hool[0]}")
print(f"Suuliin hool: {durtai_hool[-1]}")
print(f"3 dahi hool: {durtai_hool[2]}")

# dasgal 2

tavan_too = [10, 20, 30, 40, 50]
tavan_too[2] = 28
print(tavan_too)
tavan_too.insert(0, 5)
tavan_too.remove(50)
print(tavan_too)

# dasgal 3

toonuud = [3, 7, 5 , 2, 1]
toonuud.sort()
toonuud.reverse()
toonuud_copy = toonuud.copy()
print(len(toonuud))

# dasgal 4

tegees_ys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(tegees_ys[0:2])
print(tegees_ys[7:10])
print(tegees_ys[1:6])
print(tegees_ys[0:9:2])

# dasgal 5

undaanud = ["fanta", "pepsi", "cola", "goy", "fuzetea"]

for undaa in undaanud:
    print(undaa)

for index, undaa in enumerate(undaanud):
    print(f"{index}. {undaa}")

# dasgal 6

negees_araw = [1,2,3,4,5,6,7,8,9,10]
print(negees_araw)
negees_araw = [i for i in range(0, 11) if i % 2 == 0]
print(negees_araw)
negees_araw = [i**2 for i in range(0,11)]
print(negees_araw)
negees_araw = [i**2 for i in range(5, 11)]
print(negees_araw)