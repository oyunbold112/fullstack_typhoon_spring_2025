# dasgal 1
import math

a = 15
b = 7
addition_result = a + b
print(f"{a} + {b} = {addition_result}")
print(f"Үр дүнгийн төрөл: {type(addition_result)}")
subtraction_result = a - b
print(f"{a} - {b} = {subtraction_result}")
print(f"Үр дүнгийн төрөл: {type(subtraction_result)}")
multipication_result = a * b
print(f"{a} * {b} = {multipication_result}")
print(f"Үр дүнгийн төрөл: {type(multipication_result)}")
division_result = a / b
print(f"{a} / {b} = {division_result}")
print(f"Үр дүнгийн төрөл: {type(division_result)}")
int_division_result = a // b
print(f"{a} // {b} = {int_division_result}")
print(f"Үр дүнгийн төрөл: {type(int_division_result)}")
module_result = a % b
print(f"{a} // {b} = {module_result}")
print(f"Үр дүнгийн төрөл: {type(module_result)}")
exponentiation_result = a ** b
print(f"{a} ** {b} = {exponentiation_result}")
print(f"Үр дүнгийн төрөл: {type(exponentiation_result)}")


# dasgal 2

sqrt_result = math.sqrt(25)
print(f"25-iin kwadrat yzguur = {sqrt_result}")

abs_result = abs(-15)
print(f"-15iin absolute utga = {abs_result}")

flooor_result = math.floor(4.7)
ceiiil_result = math.ceil(4.3)
fctorial_result = math.factorial(5)
radian = math.radians(90)
print(f"4.3 iin deed hyzgaar {ceiiil_result}")
print(f"5.67223 iig 2 ornii nariiwchlaltaigar toimloh {round(5.67223, 2)}")
print(f"4.7iin dood hyzgaar {flooor_result}")
print(f"5iin factorial {fctorial_result}")
print(f"48 18 iin hamgiin ih huvaagch {math.gcd(48, 18)}")
print(f"90 gradusiin sin : {math.sin(radian)}")
print(f"100iin logarifm suuri 10 : {math.log10(100)}")

# dasgal 3 

decimal_num = 42
binary_num = bin(decimal_num)
print(f"{decimal_num} hoyrtiin sistemd : {binary_num}")
octal_num = oct(decimal_num)
print(f"{decimal_num} 8tiin sistemd : {octal_num}")
hexadecimal_num = hex(decimal_num)
print(f"{decimal_num} 16tiin sistemd : {hexadecimal_num}")

binary_str = "101010"
octal_str = "52"
hex_str = "2A"