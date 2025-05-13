# Animal nertei klass uusgeerei. name gedeg class attribute-tai baina
# speak gedeg funktstei baina. enehuu funkts ni yu ch hiihgui bogood uuniig pass
# gej temdegleerei
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        pass
# dinosaur gedeg animal object uusgene uu
dinosaur = Animal("Dinosaur")
print(dinosaur.name)
dinosaur.speak()

# Problem: Dog, Cat gedeg animal toroltei classuudiig uusgey. Tuhain class bolgoniig oorsdiinh
# ni duugaar hariuldag bolgooroi
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"
# cat gedeg klassig Meow gedeg bolgonuu

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
# 1 muur 1 nohoi objectuudiig uusgeed tuuniigee speak hiilgene uu
bankhar = Dog('Bankhar')
tom = Cat('Bankhar')
print(bankhar.speak())
print(tom.speak())
# Human gedeg klass uusgeed tuundee humuusiig boddog bolgono uu bas yridag
# bolgonuu
# enehuuu funkts ni zaawal implement hiigdsen baih shaardlagatai
# Odoo tuunees mongolian chinese gesen 2 torliin race uusgene uu
# tegeed yridag bolgohfoo tuhain heleer ni mendchildeg bolgooroi
class Human:
    def __init__(self, name):
        self.name = name
    def think(self):
        pass
    def talk(self):
        pass
class Mongolian (Human):
    def think(self):
        return f"Mongolian {self.name} is thinking"
    def talk(self):
        return f"{self.name} says: Сайн байна уу"
class Chinese (Human):
    def think(self):
        return f"Chinese {self.name} is thinking"
    def talk(self):
        return f"{self.name} says: Ni Hao Ma!"

oyunbold = Mongolian("oyunbold")
jackie_chan = Chinese("Jackie Chan")
print(jackie_chan.talk())
print(oyunbold.talk())