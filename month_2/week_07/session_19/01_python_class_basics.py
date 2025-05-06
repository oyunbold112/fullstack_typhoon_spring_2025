class Dog:
    """Engiin nohoi class"""
    pass
banhar = Dog() # object bodit zuil
print(banhar)
bulldog = Dog()
print(bulldog)
# __init__ gedeg classiin funkts
class Cat:
    def  __init__(self, name, race):
        self.name = name # class attributes, class variables
        self.race = race 
    # class function/method
    def meow(self):
        return f"Meow! I'm a {self.name}"
    def __str__(self):
        return f"{self.name} ni {self.race}"
    
    def __repr__(self):
        return f"Cat(name={self.name}, race={self.race})"
# cat gedeg klassaas 2 torliin object buyu 2 torliin muur uusgene uu
# object oriented programming buyu object handaltat programchlal
koshka = Cat("Koshka", "Marine Coon")
print(koshka) # koshka ni marine coon
print(koshka.name) # koshka
print(koshka.meow())
print(repr(koshka))
simba = Cat("Simba", "Arslan")
print(simba)
print(simba.name)
cindy = Cat('Cindy', 'Birman')
print(cindy)
print(cindy.race)
# class function call
print(cindy.meow())
print(repr(cindy))
# class identities
class Horse:
    species = "Canis familiaris"
    def __init__(self, name, age):
        self.name = name
        self.age = age
black_horse = Horse("Har Mori", 3)
print(black_horse.species)
print(black_horse.age)
print(black_horse.name)
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def description(self):
        return f"{self.name}"
    def bark(self,sound):
        return f"{self.name} says {sound}"
# 2 bodit nohoi uusgeed funktsuudiig ni duudaj haruulna uu
banhar = Dog(name="banhar", age=10)
basar = Dog(name="Basar", age=6)
print(banhar.description())
print(banhar.bark("bark!bark!bark!"))
print(basar.description())
print(basar.bark("bark!bark!bark!"))
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance
        self.__account_number = "123456"
    def balance(self,value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = value
khangai_account = BankAccount('Khangaikhuu', 1000000)
khangai_account.balance(1000)
print(khangai_account.balance)

# klass dotor buruu attribute ashiglah
class Dog:
    # tricks = []
    def __init__(self, name):
        self.name = name
        self.tricks = []
    def add_trick(self, trick):
        self.tricks.append(trick)
d = Dog('Fiddo')
e = Dog('Buddy')
d.add_trick("roll over")
e.add_trick("player dead")
print(d.tricks)
print(e.tricks)