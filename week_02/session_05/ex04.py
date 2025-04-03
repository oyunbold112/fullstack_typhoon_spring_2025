#PYTHON-d temdegt moruud oorchlogdoshgui
s = "hello" # unmodifiable
print(s)
#s[0] = "H" # Ene TypeError uusgene

# Orond ni shine temdegt mor uusgeh
s = "H" + s[1:] # Hello
print(s)

#Temdegt moriin uildluugiig oilgoh
s1 = "hello"
s2 = s1.upper() # shine temdegt mor uusgene, s1-g oorchlohgui
print(s1) # hello oorchlogdoogui
print(s2) # HELLO

# sanah oin noloolol
id_before = id(s1)
s1 = s1 + " world" # Shine temdegt moriin object uusgene
id_after = id(s1)
print(id_before == id_after) # False oor objectuud

