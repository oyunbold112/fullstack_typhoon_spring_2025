def profile(name, age):
    print(f"{name} ni {age} nastai")

# bairlalaar damjuulah
profile("Bold", 25)

# Nereer ni damjuulah
profile(age=25, name="Bold")

# 2. default utga
def profile(name, age=30, city="Ulaanbaatar"):
    print(f"{name} ni {age} nastai, {city}-d amidardag")

# funktsiig duudah
profile('Bold') # Anhnii utguudiig ashiglana
profile('Saraa', 25) # Nasiig darj bichne
profile('Bayr', city='Darhan') # Zowhon hotiig darj bichne

# many arguments
def sum(*numbers):
    """
    Duriin toonii argumentuudiin niilberiig oloh
    args:
     *numbers; huwisah toonii argumentuud
    returns:
     int/float: Ogogdson toonuudiin niilber
    """
    total = 0
    for number in numbers:
        total += number
    return total


# Funktsiig duudah
print(sum(1,2,3)) # Garalt: 6
print(sum(5, 10, 15, 20)) # Garalt: 50