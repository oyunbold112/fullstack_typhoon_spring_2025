num1 = int(input('Give me first number: '))
num2 = int(input('Give me second number: '))
operator = input('Give me operator: ')

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    print(num1 / num2)
elif operator == "//":
    print(num1//num2)
elif operator == '%':
    print(num1%num2)
elif operator == '**':
    print(num1**num2)
else:
    print()