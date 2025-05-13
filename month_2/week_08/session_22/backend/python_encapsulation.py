class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner              #public
        self._balance = balance         #protected
        self.__account_number = "123"   #Private

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False
    def get_balance(self):
        return self._balance
    
account = BankAccount("John", 1000)
print(account.owner)                # John
print(account._balance)             # 1000
# print(account.__account_number)   # AttributeError
print(account._BankAccount__account_number) #123