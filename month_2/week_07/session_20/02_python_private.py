class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner # public attribute
        self._balance = balance # "Private" attribute (by convention)
        self.__account_number = "12345" # Name mangled attribute

account = BankAccount("John")
print(account.owner) # Accesible: John
print(account._balance) # Accessibke but shouldnt be accessed directluy : 0
# print(account.__account_number) # Attribute Error
print(account._BankAccount__account_number)