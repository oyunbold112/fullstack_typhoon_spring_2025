# hooson toli bichig
empty_dict = {}
empty_dict = dict()

# Anhnii utgatai toli bichig (key, value)
student = {
    "ner": "bat",
    "nas": 20,
    "hot": "Ulaanbaatar"
}

# Olon torliiin ogogdol aguulsan toli bichig
mixed_dict = {
    "too": 42,
    "useg": "a",
    "jagsaalt": [1,2,3],
    "kortej": (4,5,6),
    "logic": True,
    "ded_toli": {"x": 1, "y": 2}
}

# dict() funktseer toli bichig uusgeh
person = dict(ner="Bold", nas=25, hot="Darhan")

# Tulhuur-utga hosloloos toli bichig uusgeh
items = [("alim", 3), ("banana", 5), ("jurj", 2)]
fruit_count = dict(items)

# Toli bichgiiin elemented haandah
student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar"}

# Tulhuureer handah
name = student["ner"] # bat
# get() argiig ashiglah (tulhuur baihgui bol aldaa zaahgui)
age = student.get("nas")
email = student.get("email")
email = student.get("imeil", "medeelel baihgui")

# toli bichgiin elementiig oorchloh

student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar"}

# element oorchloh
student["nas"] = 21

# shine element nemeh
student["mergejil"] = "Programist"

# olon elemnt nemeh oorchloh
student.update({"nas": 22, "utas": "99112233", "hot": "Darhan"})

print(student)

# toli bichgiin elementiig ustgah

student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar", "mergejil": "Programist"}

# pop() argaar ustgah - ustgasan elementiin utgiig butsaana
age = student.pop("nas") # age = 20

# popitem() argaar suuliin elementiig ustgah
last_item = student.popitem() 

# del tulhuur ugeer ustgah
del student["hot"]

# buh elementiig ustgah
student.clear()

student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar"}

# buh tulhuuriig awah

keys = student.keys() # dist_keys(['ner', 'nas', 'hot'])

# buh utgiig awah
values = student.values()

# buh tulhuur-utga hosloliig awah
items = student.items()

# jagsaalt bolgoh
keys_list = list(student.keys())

# tulhuur shalgah
student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar"}

# in operatoriig ashiglah
has_name = "ner" in student
has_email = "email" in student

# tulhuur baihgui bol anhnii utga onooh
email = student.setdefault("email", "bat@example.com")
print(student)

# toli bichgiig dawtah

student = {"ner": "bat", "nas": 20, "hot": "Ulaanbaatar"}

# tulhuureer dawtah

for key in student:
    print(f"{key}: {student[key]}")

# tulhuur, utgaar dawtah
for key, value in student.items():
    print(f"{key}: {value}")

# zowhon tulhuureer dawtah
for key in student.keys():
    print(key)

# zowhon utgaar dawtah
for value in student.values():
    print(value)


# Toli bichgiig huulah
original = {"a": 1, "b": 2, "c": {"x": 10, "y": 20}}

# guyhen huulbar (shallow copy)

copy1 = original.copy()
copy2 = dict(original)

# gun huulbar (deep copy)
import copy
deep_copy = copy.deepcopy(original)

# guyhen huulbart anhaarah zuil
original["c"]["x"] = 100
print(copy1["c"]["x"]) # 100 dotood toli bichig oorchlogdson
print(deep_copy["c"]["x"]) # 10 dotood toli bichig oorchlogdoogui

# Toli bichgiig erembeleh
# Tulhuureer erembeleh
student = {
    "ner": "bat",
    "nas": 20,
    "hot": "Ulaanbaatar"
}

sorted_keys = sorted(student.keys())
sorted_dict = {k: student[k] for k in sorted_keys}
print(sorted_dict)

# Toli bichgiin oilgolt (Dictionary comprehension)
# Too bolon toonii kwadratiig aguulsan toli bichig
squares = {x: x**2 for x in range(1,6)}
print(squares)

# nohtsoltei toli bichgiin oilgolt
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)

# Ogogdson jagsaaltaas toli bichig uusgeh
names = ["bat", "bold", "saraa", "tuya"]
name_lenghts = {name: len(name) for name in names}
print(name_lenghts)

# Suragchdiin medeelel aguulsan dawhar toli bichig
students = {
    "s001": {
        "ner": "bat",
        "nas": 20,
        "hicheeluud": ["Matematik", "Fizik", "Programchlal"]
    },
    "s002": {
        "ner": "Bold",
        "nas": 21,
        "hicheeluud": ["Angli hel", "Programchlal", "Dizain"]
    }
}

# Dawhar toli bichgiin elemented handah
print(students["s001"]["ner"])
print(students["s002"]["hicheeluud"][0])

# Dawhar toli bichgiig dawtah
for student_id, info in students.items():
    print(f"Suragchiin ID: {student_id}")
    print(f"Ner: {info['ner']}")
    print(f"Nas: {info['nas']}")
    print(f"Hicheeluud: {', '.join(info['hicheeluud'])}")
    print()

# Exercise 01 
# ugsiin dawtamjiig tooloh
text = "bi chamd hairtai bi chamd hairtai gedgee helmeer baina"
words = text.split()

word_count = {}

for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1
print(word_count)

# exercise 02
# suragchdiig ni nasaar ni bulegleh
students = [
    {"ner": 'bat', 'nas': 20},
    {"ner": 'bold', 'nas': 21},
    {"ner": 'saraa', 'nas': 20},
    {'ner': "tuya", 'nas': 21}
]

students_by_age = {}
for student in students:
    age = student["nas"]
    if age in students_by_age:
        students_by_age[age].append(student["ner"])
    else:
        students_by_age[age] = [student["ner"]]

print(students_by_age)
# {20: ['bat', 'saraa'], 21: ['Bold', 'Tuya']}

# Exercise 03
def word_frequency(text):
    # textiig tsewerleh
    text = text.lower()
    # temdegtuudiig arilgah 
    for char in '.,?!;:()[]{}""' "":
        text = text.replace(char, "")
    # ugsiig zadlah
    words = text.split()

    # ugsiin dawtamjiin tootsooloh
    frequency = {}
    for word in words:
        if word in frequency:
            frequency[word] += 1
        else:
            frequency[word] = 1
    return frequency

text = "bi python hel surch baina. Python bol mash sonirholtoi hel. bi Python-g sain surah heregtei"
freq = word_frequency(text)
print(freq)
