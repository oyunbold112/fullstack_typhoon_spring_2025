# dasgal 1
print("Dasgal 1 - Өгөгдсөн тоо эерэг, сөрөг, эсвэл тэг эсэхийг шалгах програм бичих")
number = int(input("Too ogno uu: "))

if number > 0:
    print(f"{number} bol eyreg too")
elif number < 0:
    print(f"{number} bol sorog too")
else:
    print(f"{0} bol teg")

# dasgal 2

print("Dasgal 2 - Өгөгдсөн жил өндөр жил мөн эсэхийг шалгах програм бичих")
year = int(input("heden on?: "))

if year % 4 == 0:
    print(f"{year} on Ondor jil mon baina")
else:
    print(f"{year} on Ondor jil bish baina")

# dasgal 3
print("Dasgal 3 - Гурвалжны гурван талын урт өгөгдсөн үед тэр гурвалжин зурагдах эсэхийг шалгах програм бичих")
a = input("gurvaljnii neg taliin urtiig ogno uu: ")
b = input("gurvaljnii nogoo taliin urtiig ogno uu: ")
c = input("gurvaljnii nogoo taliin urtiig ogno uu: ")

if a + b < c:
    print("Gurvaljing zurah bolomjgui baina")
elif a + c < b:
    print("Gurvaljing zurah bolomjgui baina")
elif b + c < a:
    print("Gurvaljing zurah bolomjgui baina")
else: 
    print("Gurvaljing zurah bolomjtoi baina")

# dasgal 4
print("Dasgal 4 - Хэрэглэгчийн оруулсан тоо 1-100 хооронд байвал 'Зөв', үгүй бол 'Буруу' гэж хэвлэх програм бичих")

number = int(input("Too ogno uu: "))
if number >= 1 and number <= 100:
    print("Zow")
else:
    print("Buruu")

# dasgal 5

print("dasgal 5 - Хэрэглэгчийн оруулсан үсэг эгшиг эсвэл гийгүүлэгч эсэхийг шалгах програм бичих")
useg = input("Useg oruulna uu?: ")

if useg == "a":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
elif useg == "e":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
elif useg == "i":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
elif useg == "o":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
elif useg == "u":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
elif useg == "y":
    print(f"tanii oruulsan {useg.upper()} useg egshig useg baina")
else:
    print(f"tanii oruulsan {useg.upper()} useg giiguulegch useg baina")