import random

letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
]

symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"]
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

ltters = int(input('tanii nuuts ugend heden useg baihiiig husej baina we?'))
smbols = int(input('Ta heden temdegt oruulahiig husej baina we?'))
nmbers = int(input('ta heden too oruulahiig husej baina we?'))

password = ''

for i in range(ltters):
    password += letters[random.randint(0, len(letters) - 1)]

for i in range(smbols):
    password += symbols[random.randint(0, len(symbols)- 1)]
for i in range(nmbers):
    password += numbers[random.randint(0, len(numbers)- 1)]

print(password)