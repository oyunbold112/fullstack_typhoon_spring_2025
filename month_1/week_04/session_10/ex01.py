# Python strings

single_quotes = 'This is single quotation text'
double_quotes = 'This is double quotation text'
multi_line_string = """
        Multi Line String
        Text
"""
# special characters
special_chars = "New Line: \n\tTabulator"
print(special_chars)
# raw string 
special_chars = r"New Line: \n\tTabulator"
print(special_chars)

text = "Монгол"
# indexeer handah
print(text[0])
print(text[-1])
# Hesegchleh
print(text[0:3]) # mon
print(text[:3]) # mon
print(text[3:]) # gol
print(text[::-1]) # lognoM

text = "Mongol uls"
# Urt
print(len(text))
# Tom jijig
print(text.upper())
print(text.lower())
print(text.capitalize())
print(text.title())
# Haih
print(text.find("gol"))
print(text.find("oros"))
print("gol" in text)
print(text.count("o"))

# Orluulah
print(text.replace("uls", "hel")) # Mongol hel
# Temdegt moriig huwaah
words = text.split(" ")
print(words) # ["Mongol", "uls"]
# Temdegt moruuudiig negtgeh
joined=", ".join(words)
print(joined)
#ehlel togsgol shalgah
print(text.startswith("mon"))
print(text.endswith("uls"))
# hooson zai arilgah
padded = " Mongol "
print(padded.strip())
print(padded.lstrip())
print(padded.rstrip())
#Temdegt moriin buttsiig shalgah
print("123".isdigit())
print("abc".isalpha())
print("abc123".isalnum())
print(" ".isspace())

# % operator ashiglah huuchin arga
name = "bat"
age = 25
print("Sain uu, %s! Tanii nas %d." % (name,age)) # Sain uu, bat tanii nas 25,0
#format() arga ashiglah
print("Sain uu, {}! Tanii nas {}.".format(name, age))
print("Sain uu, {0}! Tanii nas {1}.".format(name,age))
print(
    "Sain uu, {name}! Tanii nas {age}.".format(name=name, age=age)
)
# f string ashiglah python 3.6+
print(f"Sain uu, {name}! Tanii nas {age}")
print(f"Tanii 5 jiliin daraah nas: {age + 5}")

#Toonuudiig formatlah
pi = 3.14159
print(f"Pi too: {pi:.2f}")
print(f"Huwi: {0.25:.1%}")

first = "Mongol"
last = "Uls"
# + operator ashiglah
full = first + " " + last
print(full)
# += operator ashiglah
message = "Sain uu, "
message += "Bat!"
print(message)
#Olon temdegt moriig negtgeh
words= ["python", "hel", "surah", "hyalbar"]
sentence = " ".join(words)
print(sentence)

# Temdegt moriin oilgolt
text = "Hello, World!"
# list comprehension
vowels = [char for char in text if char.lower() in "aeiou"]
print(vowels)
# Temdegt moriig horwuuleh
uppercase = [char.upper() for char in text]
print(uppercase)