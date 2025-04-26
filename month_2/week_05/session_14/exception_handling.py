# exception handling

# problem

print("this line will print")
x = 10
y = 0

if x == 5:
    print('Hello')

print('Next line')

# Division zero
# print(x / y)
#print('Third line')

# Undsen butets - Exception handler

try:
    # Aldaa garch bolzoshgui kod
    result = 10 / 0
except ZeroDivisionError:
    #Aldaa garwal hiih uildel
    print("Tegeer huwaah bolomjgui")

print('Fourth line')

# Olon torliin aldaag barih

try: 
    number = int(input("Too ogno uu: "))
    result = 10 / number
except ValueError:
    print("Zow too ogno uu")
except ZeroDivisionError:
    print("Tegeer huwaah bolomjgui")

print('Fifth line')

# hed heden aldaag neg dor barih
try:
    number = int(input("Too ogno uu: "))
    result = 10 / number
except (ValueError, ZeroDivisionError):
    print("Buruu orolt eswel tegeer huwaah oroldlogo")

# Herwee ymar aldaag busdaas ylgaj chadahgui bol
# Buh aldaag barih (bolgoomjyoi heregleh)
try:
    file = open("nonexistent.txt", "r")
except Exception as e:
    print(f"Aldaa garlaa: {e}")

print('Sixth Line')

# Aldaanii medeelel awah

try:
    x = 10 / 0
except Exception as e:
    print(f"Aldaanii torol: {type(e).__name__}")
    print(f"Aldaanii messeg: {str(e)}")

# else blok - aldaa garaagui uyd ajillana:

try:
    number = int(input("Too ogno uu: "))
    result = 10 / number
except ValueError:
    print("Zow too ogno uu")
except ZeroDivisionError:
    print("Tegeer huwaah bolomjgui")
else:
    # Aldaa garaagui bol ajillana
    print(f"Ur dun: {result}")

# finaly blok - aldaa garsan esehees ul hamaaran ajillana

try: 
    # Ersdeltei kod
    file = open("example.txt", 'r')
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File oldoogui!")
else:
    print(f"File ner: {file.name}")
    print(f"Fail undes: {file.undest}")
finally:
    # Ul hamaaran ajillana
    if 'file' in locals() and not file.closed:
        file.close()

# Aldaa damjuulah - (re-raising)
"""
try: 
    x = int("too bish")
except ValueError:
    print("ValueError bolowsruulj baina...")
    # aldaag damjuulah
    raise """
# oor aldaa uusgeh
"""
try:
    age = int(input("Nasaa oruulna uu: "))
    if age < 0:
        raise ValueError("Nas sorog too baij bolohgui")
except ValueError as e:
    if "invalid literal" in str(e):
        print("Zow too oruulna uu")
    else:
        print(e)
"""

# Exception chaining: (Aldaa holboh)
"""try:
    # Anhnii aldaa
    x = int("too bish")
except ValueError as e:
    # SHine aldaa uusgej, anhnii aldaatai holboh
    raise RuntimeError("Bolowsruulalt amjiltgui bolson") from e
"""
# traceback module ashiglah
import traceback
try:
    # Aldaa garch bolzoshgui kod
    1 / 0
except Exception:
    # Delgerengui traceback medeelel hewleh
    traceback.print_exc()

# Exercise divide geged funkts bicheed a, b gedeg parameter awdag bolgono uu
# enehuu funkts ni tuhain paramteruudiig too esehiig shalgaad too bish bol
# ValueError aldaa ogdog harin 0-d huwaawal ZeroValueError ogdog bailgaarai

def divide(a, b):
    try: 
        num1  = float(a)
        num2 = float(b)
        result = a/b
    except ValueError:
        print('Give me correct numbers')
    except ZeroDivisionError:
        print('Do not divide number by Zero')
    except Exception:
        print('Error occured')
    else:
        print(result)
    
divide(10,3)